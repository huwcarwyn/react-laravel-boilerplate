import { createSelector } from 'reselect'

const currentUserIdSelector = state => state.session.currentUser
const userEntitiesSelector = state => state.entities.users

export const currentUserSelector = createSelector(
  currentUserIdSelector,
  userEntitiesSelector,
  (currentUserId, userEntities) => userEntities[currentUserId]
)
