import { Users } from '../../../entity/Users'
import { initializeRootUser } from '../../../modules/auth/initialization'
import { TestHelper } from '../../database'

beforeAll(async () => {
  await TestHelper.instance.setupTestDatabase()
})

afterAll(() => {
  TestHelper.instance.teardownTestDatabase()
})

describe('root account initialization', () => {
  test('should initialize root account', async () => {
    expect(await Users.count()).toEqual(0)

    await initializeRootUser()

    const root = await Users.findOne({
      where: {
        username: 'root',
      },
    })

    expect(root).not.toBeNull()
  })
})
