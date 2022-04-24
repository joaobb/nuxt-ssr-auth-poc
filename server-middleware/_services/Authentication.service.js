const uuid = require('uuid')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const EXPIRATION_TIME = 1

/*
  User model:
    id: Unique user ID,
    email: User email,
    password: User password hash
 */

class Authentication {
  users

  constructor() {
    this.users = {
      '': {
        id: uuid.v4(),
        email: '',
        password:
          '$2a$10$JBWFBhvylXQYDU864iMIiO4IxMyHdaoyd3W4jbNYLyNN09uWCFa9q',
      },
    }
  }

  async signIn(email, password) {
    const user = this.users[email]

    if (!user) throw new Error('User not found or wrong password')
    const samePassword = await bcrypt.compare(password, user.password)

    if (!samePassword) throw new Error('User not found or wrong password')

    const token = jwt.sign({ user_id: user.id, email }, process.env.TOKEN_KEY, {
      expiresIn: EXPIRATION_TIME + 'h',
    })
    user.token = token

    return { email: user.email, token, expiresIn: EXPIRATION_TIME * 60 * 60 }
  }

  async signUp(email, password) {
    const userExists = this.users[email]
    if (userExists) throw new Error('User already exists')

    const passwordHash = await bcrypt.hash(password, 10)
    this.users[email] = {
      id: uuid.v4(),
      email,
      password: passwordHash,
    }

    return true
  }
}

module.exports = Authentication
