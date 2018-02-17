import React from 'react'
import { storiesOf } from '@storybook/react'

import {
	NeutralNotification,
	NegativeNotification,
	WarningNotification,
	PositiveNotification
} from 'components/Notifications'

storiesOf('Notifications', module)
	.add('Neutral', () => (
		<NeutralNotification message="I'm a notification" />
	))
	.add('Negative', () => (
		<NegativeNotification message="I'm a notification" />
	))
	.add('Warning', () => (
		<WarningNotification message="I'm a notification" />
	))
 	.add('Positive', () => (
 		<PositiveNotification message="I'm a notification" />
	))
