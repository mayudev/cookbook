import { json, Request, Response, Router } from 'express'
import { RegistrationType } from 'types'
import { Users } from '../entity/Users'

type BeginBody = {
  username: string | null
}

export default class AuthController {
  public router = Router()

  constructor() {
    this.initRoutes()
  }

  private initRoutes() {
    this.router.use(json())
    this.router.post('/begin', this.beginPasswordlessLogin)
  }

  /** Determine whether it's email or username.
   We don't allow @ in usernames, so we check by that.
  **/
  async findUserByUsernameOrEmail(value: string) {
    try {
      if (value.indexOf('@') > -1) {
        // An e-mail was provided
        const target = await Users.findOneBy({
          email: value,
        })
        return target
      } else {
        const target = await Users.findOneBy({
          username: value,
        })
        return target
      }
    } catch (e) {
      console.dir(e)
      return null
    }
  }

  private beginPasswordlessLogin = async (
    req: Request<{}, {}, BeginBody>,
    res: Response
  ) => {
    const username = req.body.username
    if (!username) {
      return res.status(400).send({
        error: 'Username is required.',
      })
    }

    const target = await this.findUserByUsernameOrEmail(username)
    if (!target) {
      // User not found, registration process goes here
      return res.sendStatus(501)
    } else {
      if (target.registrationType === RegistrationType.Special) {
        return res.sendStatus(200)
      } else if (target.registrationType === RegistrationType.Passwordless) {
        // User found, begin login process here (send e-mail with verification code)
        return res.sendStatus(200)
      } else {
        return res.status(400).send({
          error: 'This account does not use passwordless login.',
        })
      }
    }
  }
}
