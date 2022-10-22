import { hash } from 'bcrypt'
import { randomBytes, randomUUID } from 'crypto'
import { PermissionLevel, RegistrationType } from 'types'
import { Users } from '../../entity/Users'

// Creates a root user if there are no users in database
export async function initializeRootUser() {
  const userCount = await Users.count()

  if (userCount === 0) {
    // Generate root password
    const plaintextPassword = randomBytes(16).toString('hex')

    const root = new Users()
    root.id = randomUUID()
    root.displayName = 'root'
    root.username = 'root'
    root.permissionLevel = PermissionLevel.Administrator
    root.registrationType = RegistrationType.Special

    const hashedPassword = await hash(plaintextPassword, 10)

    root.specialRegistrationPassphrase = hashedPassword
    await root.save()

    console.log('## root account has been generated.')
    console.log('username: root')
    console.log(`password: ${plaintextPassword}`)
  }
}
