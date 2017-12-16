import React from 'react'
import { storiesOf } from '@storybook/react'

import { NeutralButton, NegativeButton, PositiveButton } from 'components/Button/Button'

storiesOf('Button', module)
  .add('All Buttons', () => {
      let buttons = [{
        component: NeutralButton,
        text: 'Neutral Button',
      }, {
        component: NegativeButton,
        text: 'Negative Button',
      }, {
        component: PositiveButton,
        text: 'Positive Button'
      }]

      return (
        <div>
          {buttons.map((buttonInfo) => {
            let ButtonComponent = buttonInfo.component

            return (<div className="p-4 inline-block">
              <ButtonComponent>{buttonInfo.text}</ButtonComponent>
            </div>)
          })}
        </div>
      )
  })
