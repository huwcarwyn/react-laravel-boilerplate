import Helmet from 'react-helmet'
import React, { Fragment } from 'react'
import { useModal } from 'react-context-modals'

import { NeutralButton } from 'components'

const OverviewComponent = () => {
  const ModalExample = props => <div className="p-12">{props.message}</div>

  const { showModal } = useModal()

  return (
    <Fragment>
      <Helmet>
        <title>Boilerplate overview</title>
      </Helmet>
      Put your initial dashboard page here
      <div className="mt-4">
        <NeutralButton
          onClick={() =>
            showModal(ModalExample, {
              message: 'This message was passed in via modal props'
            })
          }
        >
          Open an example modal
        </NeutralButton>
      </div>
    </Fragment>
  )
}

export default OverviewComponent
