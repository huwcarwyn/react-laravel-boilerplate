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
		<NeutralNotification>
			I'm a notification
		</NeutralNotification>
	))
	.add('Negative', () => (
		<NegativeNotification>
			I'm a notification
		</NegativeNotification>
	))
	.add('Warning', () => (
		<WarningNotification>
			I'm a notification
		</WarningNotification>
	))
 	.add('Positive', () => (
 		<PositiveNotification>
 			I'm a notification
 		</PositiveNotification>
	))
