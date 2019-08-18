import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllPosts = state => {
  const dnEntities = denormalize(
    { posts: Object.keys(state.entities.posts) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.posts
}
