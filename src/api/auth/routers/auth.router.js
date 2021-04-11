const express = require('express')
const Joi = require('joi')
const authController = require('../middlewares/auth.controllers')
const validator = require('../../../helpers/validator')

const router = express.Router()

// create user
router.post('/user', authController.createUser)

// login
router.post(
  '/login',
  validator.body(Joi.object({
    userId: Joi.string()
      .alphanum()
      .min(3)
      .max(32)
      .required(),

    password: Joi.string()
      .max(32)
      .required(),
  })),
  authController.login)

// protected
router.get(
  '/protected',
  authController.validateJwt,
  (req, res) => {
    res.status(200).send()
  }
)

router.get(
  '/protected/admin',
  authController.validateJwt,
  authController.roleAdmin,
  (req, res) => {
    console.log('token:', req.token)
    res.status(200).send()
  }
)

router.get(
  '/protected/user',
  authController.validateJwt,
  authController.roleUser,
  (req, res) => {
    console.log('token:', req.token)
    res.status(200).send()
  }
)



//router.get('/login', loginController)

//router.get('/protected', getJwtValidator(),  ((req, res) => res.send('ok')))

module.exports = router
