import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { ModalProvider } from 'contexts'

export class ModalProviderWrapperComponent extends Component {
  constructor(props) {
    super(props)

    this.onKeyDown = this.onKeyDown.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.showModal = this.showModal.bind(this)

    this.state = {
      component: null,
      modalProps: {},
      hideModal: this.hideModal,
      showModal: this.showModal
    }
  }

  onKeyDown(e) {
    if (e.key === 'Escape') {
      this.hideModal()
    }
  }

  componentDidMount() {
    const { history } = this.props

    this.unlisten = history.listen(this.hideModal)
  }

  componentWillUnmount() {
    this.unlisten()
  }

  hideModal() {
    document.body.classList.remove('overflow-hidden')
    document.body.classList.remove('relative')
    this.setState(() => ({
      component: null,
      modalProps: {}
    }))
  }

  showModal(component, modalProps = {}) {
    document.body.classList.add('overflow-hidden')
    document.body.classList.add('relative')
    this.setState(() => ({
      component,
      modalProps
    }))
  }

  render() {
    const { children } = this.props

    return (
      <div onKeyDown={this.onKeyDown}>
        <ModalProvider value={this.state}>{children}</ModalProvider>
      </div>
    )
  }
}

export const ModalProviderWrapper = withRouter(ModalProviderWrapperComponent)
