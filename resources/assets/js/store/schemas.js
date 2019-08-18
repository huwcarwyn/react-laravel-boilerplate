import { schema } from 'normalizr'

export const user = new schema.Entity('users')

export const entities = {
  users: [user]
}
