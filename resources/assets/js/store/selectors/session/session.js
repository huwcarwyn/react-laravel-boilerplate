import { createSelector } from 'reselect'

const currentUserSlugSelector = state => state.session.currentUser
const userEntitiesSelector = state => state.entities.users

export const currentUserSelector = createSelector(
  currentUserSlugSelector,
  userEntitiesSelector,
  (currentUserSlug, userEntities) => userEntities[currentUserSlug]
)
