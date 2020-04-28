import { Op } from 'sequelize';
import {
  parseISO,
  startOfDay,
  endOfDay,
  setSeconds,
  setMinutes,
  setHours,
  format,
  isAfter,
} from 'date-fns';

import Appointment from '../models/Appointment';
import schedule from '../utils/schedule';

class AvailableController {
  async index(req, res) {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'Invalid date' });
    }

    const parsedDate = parseISO(date);

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.params.providerId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
    });

    // 08:00
    const available = schedule.map(time => {
      const [hour, minute] = time.split(':');
      const value = setSeconds(
        setMinutes(setHours(parsedDate, hour), minute),
        0,
      );

      return {
        time,
        value: format(value, "yyyy-MM-dd'T'HH:mm:ssxx"),
        available:
          isAfter(value, new Date()) &&
          !appointments.find(
            appointment => format(appointment.date, 'HH:mm') === time,
          ),
      };
    });

    return res.status(200).json(available);
  }
}

export default new AvailableController();
