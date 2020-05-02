import { parseISO, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import User from '../models/User';
import Appointment from '../models/Appointment';

class ScheduleController {
  async index(req, res) {
    const provider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!provider) {
      return res.status(401).json({ error: 'Invalid provider' });
    }

    const { data } = req.query;
    const parsedDate = parseISO(data);

    /**
     * ? 2020-04-27T22:00:00:00
     * ? 2020-04-28T22:00:00:00
     */

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
      order: ['date'],
    });

    return res.status(200).json(appointments);
  }
}

export default new ScheduleController();
