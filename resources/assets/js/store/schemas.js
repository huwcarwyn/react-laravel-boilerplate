import { schema } from 'normalizr'

export const user = new schema.Entity('users', {}, { idAttribute: 'slug' })

export const entities = {
  users: [user]
}
