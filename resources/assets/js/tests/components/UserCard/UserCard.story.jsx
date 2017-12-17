import React from 'react'
import { storiesOf } from '@storybook/react'

import { UserCardComponent as UserCard } from 'components/UserCard'

const user = {
  firstName: 'Test',
  lastName: 'Testington',
  profilePicture: undefined
}

storiesOf('User Card', module)
  .add('Light Theme', () => (
    <div className="inline-block bg-blue-darker p-4">
      <UserCard user={user} colorTheme="light" />
    </div>
  ))
  .add('Dark Theme', () => (
    <div className="p-4">
      <UserCard user={user} colorTheme="dark" />
    </div>
  ))
