import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      provider: Yup.boolean(),
      password: Yup.string()
        .required()
        .min(6)
        .max(30),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    if (await User.findOne({ where: { email: req.body.email } })) {
      return res.status(401).json({ error: 'User email already exists' });
    }

    const { id, name, provider, email, password_hash } = await User.create(
      req.body
    );

    return res.status(200).json({
      id,
      name,
      email,
      provider,
      password_hash,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string()
        .min(6)
        .max(30),
      password: Yup.string()
        .min(6)
        .max(30)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string()
        .min(6)
        .max(30)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      if (await User.findOne({ where: { email } })) {
        return res.status(400).json({ error: 'This email already exists' });
      }
    }

    // password, oldPassword == senha atual no BD
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(400).json({ error: 'Password does not match' });
    }

    const { id, name } = await user.update(req.body);

    return res.status(200).json({ id, name });
  }

  async show(req, res) {
    return res.json({ ok: true });
  }

  async delete(req, res) {
    return res.json({ ok: true });
  }
}

export default new UserController();
