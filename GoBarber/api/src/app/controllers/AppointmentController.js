import * as Yup from 'yup';
import { parseISO, startOfHour, isBefore } from 'date-fns';

import User from '../models/User';
import File from '../models/File';
import Appointment from '../models/Appointment';

class AppointmentController {
  async index(req, res) {
    const appointments = await Appointment.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ['date'],
      attributes: ['id', 'date', 'past', 'cancelable'],
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });

    return res.status(200).json(appointments);
  }

  async store(req, res) {
    // data, user_id, provider_id
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Provider or date invalid' });
    }

    const { provider_id, date } = req.body;

    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!isProvider) {
      return res.status(400).json({ error: 'Provider not found' });
    }

    /**
     * ! parseISO: pega a data no formato string e transforma em objeto Date
     * ! A função isBefore vai verificar se a data já passou
     */

    const parsedDate = startOfHour(parseISO(date));

    if (isBefore(parsedDate, new Date())) {
      return res.status(401).json({ error: 'Past dates are not allowed.' });
    }

    const checkAvailability = await Appointment.findOne({
      where: {
        provider_id,
        date: parsedDate,
        canceled_at: null,
      },
    });

    if (checkAvailability) {
      return res
        .status(401)
        .json({ error: "Can't make appointment on this date" });
    }

    if (req.userId === provider_id) {
      return res
        .status(401)
        .json({ error: "Can't make appointments with himself" });
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date: parsedDate,
    });

    return res.status(200).json(appointment);
  }

  async delete(req, res) {
    const appointment = await Appointment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['name', 'email'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    });

    if (appointment.user_id !== req.userId) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    if (!appointment.cancelable) {
      return res
        .status(401)
        .json({ error: "Can't delete appointment within 2 hours of it" });
    }

    appointment.canceled_at = new Date();

    await appointment.save();

    return res.status(200).json(appointment);
  }
}

export default new AppointmentController();
