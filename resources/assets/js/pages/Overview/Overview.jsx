import React from 'react'

import { NeutralButton } from 'components'
import { ModalConsumer } from 'contexts'

const OverviewComponent = props => {
  const ModalExample = props => <div>{props.message}</div>
  return (
    <div>
      Put your initial dashboard page here
      <div className="mt-4">
        <ModalConsumer>
          {({ showModal }) => (
            <NeutralButton
              onClick={() =>
                showModal(ModalExample, {
                  message: 'This message was passed in via modal props'
                })
              }
            >
              Open an example modal
            </NeutralButton>
          )}
        </ModalConsumer>
      </div>
    </div>
  )
}

export default OverviewComponent
