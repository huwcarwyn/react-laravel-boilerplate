import React from 'react'

import { ModalProvider } from 'contexts'

export class ModalProviderWrapper extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      component: null,
      modalProps: {},
      hideModal: this.hideModal.bind(this),
      showModal: this.showModal.bind(this)
    }
  }

  hideModal () {
    this.setState({
      component: null,
      modalProps: {}
    })
  }

  showModal (component, modalProps = {}) {
    console.log('showing modals..')
    this.setState({
      component,
      modalProps
    })
  }

  render () {
    const { children } = this.props

    return (
      <ModalProvider value={this.state}>
        { children }
      </ModalProvider>
    )
  }
}
