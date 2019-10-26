import Helmet from 'react-helmet'
import React, { Fragment, useContext } from 'react'

import { NeutralButton } from 'components'
import { ModalContext } from 'contexts'

const OverviewComponent = () => {
  const ModalExample = props => <div>{props.message}</div>

  const { showModal } = useContext(ModalContext)

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
