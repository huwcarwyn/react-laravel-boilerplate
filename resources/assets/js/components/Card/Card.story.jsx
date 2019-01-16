import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card, CardContent, CardListItem } from './Card'

storiesOf('Card', module)
  .addDecorator((story) => (<div className="p-6">{story()}</div>))
  .add('Default', () => (
    <Card>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsa quos
        maxime, expedita ullam qui culpa doloremque earum dignissimos fugit
        rerum quam, at ipsam, incidunt aut laboriosam, eos veritatis aperiam.
    </Card>
  ))
  .add('With padded content', () => (
    <Card>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsa quos
        maxime, expedita ullam qui culpa doloremque earum dignissimos fugit
        rerum quam, at ipsam, incidunt aut laboriosam, eos veritatis aperiam.
      </CardContent>
    </Card>
  ))
  .add('With title and padded content', () => (
    <Card title="Card title">
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsa quos
        maxime, expedita ullam qui culpa doloremque earum dignissimos fugit
        rerum quam, at ipsam, incidunt aut laboriosam, eos veritatis aperiam.
      </CardContent>
    </Card>
  ))
  .add('With list items', () => (
    <Card title="Card with a list in it">
      <CardListItem>
        item number 1
      </CardListItem>
      <CardListItem>
        item number 2
      </CardListItem>
      <CardListItem>
        item number 3
      </CardListItem>
      <CardListItem>
        item number 4
      </CardListItem>
    </Card>
  ))
