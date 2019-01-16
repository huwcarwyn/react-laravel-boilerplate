import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  NeutralFlashMessage,
  NegativeFlashMessage,
  WarningFlashMessage,
  PositiveFlashMessage
} from './FlashMessages'

storiesOf('Flash Messages', module)
  .add('Neutral', () => (
    <NeutralFlashMessage message="I'm a message!" />
  ))
  .add('Negative', () => (
    <NegativeFlashMessage message="I'm a message!" />
  ))
  .add('Warning', () => (
    <WarningFlashMessage message="I'm a message!" />
  ))
  .add('Positive', () => (
    <PositiveFlashMessage message="I'm a message!" />
  ))
