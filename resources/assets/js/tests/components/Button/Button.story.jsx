import React from 'react'
import { storiesOf } from '@storybook/react'

import { NeutralButton, NegativeButton, PositiveButton } from 'components/Button'

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
          {buttons.map((buttonInfo, index) => {
            let ButtonComponent = buttonInfo.component

            return (<div key={index} className="p-4 inline-block">
              <ButtonComponent>{buttonInfo.text}</ButtonComponent>
            </div>)
          })}
        </div>
      )
  })
