import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import { UserCardComponent as UserCard } from './UserCard'

const user = {
  first_name: 'Test',
  last_name: 'Testington',
  profilePicture: undefined
}

storiesOf('User Card', module)
  // Need to add this decorator since the component has Links in it which need
  // a router to work. We use MemoryRouter since it's ideal for testing envs
  .addDecorator((story) => (<MemoryRouter>{story()}</MemoryRouter>))
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
