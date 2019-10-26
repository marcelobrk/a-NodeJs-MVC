const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { email, name, lastname, password, sex, city, uf  } = req.body;

    const userExists = await User.findOne({ where: {email: email} })

    if (userExists) {
        console.log(`User ${email} already exists.`)
        return res.json(userExists)
    }
    const user = await User.create({ email, name, lastname, password, sex, city, uf });

    return res.json(user);
  }
};