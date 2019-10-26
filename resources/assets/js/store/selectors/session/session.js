export const currentUserSelector = ({
  entities: { users },
  session: { currentUser }
}) => users[currentUser]
