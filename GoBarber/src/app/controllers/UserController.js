import User from '../models/User';

class UserController {
  async store(req, res) {
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
    return res.json({ ok: true });
  }

  async show(req, res) {
    return res.json({ ok: true });
  }

  async delete(req, res) {
    return res.json({ ok: true });
  }
}

export default new UserController();
