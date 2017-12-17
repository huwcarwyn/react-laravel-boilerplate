import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card, PaddedCard } from 'components/Card'

storiesOf('Card', module)
  .add('Default', () => (
    <div className="p-4">
      <Card>
        Card
      </Card>
    </div>
  ))
  .add('Padded Card', () => (
    <div className="p-4">
      <PaddedCard>
        Card
      </PaddedCard>
    </div>
  ))
