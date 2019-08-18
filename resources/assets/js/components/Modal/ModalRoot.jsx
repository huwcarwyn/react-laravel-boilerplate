import React, { Fragment } from 'react'

import { ModalConsumer } from 'contexts'
import { CrossIcon } from 'components'

import { ModalBackdrop, ModalWrapper } from './ModalDisplay'

export const ModalRoot = () => (
  <ModalConsumer>
    {({ component: Component, modalProps, hideModal }) =>
      Component ? (
        <Fragment>
          <ModalBackdrop onClick={hideModal} />
          <ModalWrapper className={modalProps.wrapperClasses}>
            <div className="text-right">
              <CrossIcon
                className="w-6 h-6 mt-2 mr-2 text-grey absolute pin-r pin-t cursor-pointer"
                onClick={hideModal}
              />
            </div>
            <Component {...modalProps} hideModal={hideModal} />
          </ModalWrapper>
        </Fragment>
      ) : null
    }
  </ModalConsumer>
)
