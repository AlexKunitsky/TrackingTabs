// User object will have all models from models/index.js callback
const {User} = require('../models')

module.exports = {
  async register (req, res) {
    // create new user
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email already in use.'
      })
    }
  }  
}