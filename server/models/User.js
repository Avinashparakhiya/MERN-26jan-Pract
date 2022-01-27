const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true }
})

const User = mongoose.model('user', userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstname: Joi.string().required().label('First Name'),
    lastname: Joi.string().required().label('Last Name'),
    email: Joi.string().email().required().label('Email')
  });
  return schema.validate(data);
};

module.exports =  User;