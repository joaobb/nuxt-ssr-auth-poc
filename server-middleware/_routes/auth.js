const { authentication } = require('../app')
const express = require('express')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await authentication.signIn(email, password)

    res.status(200).json(result)
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: err.message })
  }
})

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body
    await authentication.signUp(email, password)

    res.status(201).send()
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: err.message })
  }
})

module.exports = router
