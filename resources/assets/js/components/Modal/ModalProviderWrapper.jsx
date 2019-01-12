import React from 'react'
import { withRouter } from 'react-router'

import { ModalProvider } from 'contexts'

export class ModalProviderWrapperComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      component: null,
      modalProps: {},
      hideModal: this.hideModal.bind(this),
      showModal: this.showModal.bind(this)
    }
  }

  componentDidMount () {
    const { history } = this.props

    this.unlisten = history.listen(() => {
      this.setState({
        component: null,
        modalProps: {}
      })
    })
  }

  componentWillUnmount () {
    this.unlisten()
  }

  hideModal () {
    this.setState({
      component: null,
      modalProps: {}
    })
  }

  showModal (component, modalProps = {}) {
    this.setState({
      component,
      modalProps
    })
  }

  render () {
    const { children } = this.props
    const { component } = this.state

    return (
      <div className={`h-screen overflow-${component ? 'hidden' : 'scroll'}`}>
        <ModalProvider value={this.state}>
          { children }
        </ModalProvider>
      </div>
    )
  }
}

export const ModalProviderWrapper = withRouter(
  ModalProviderWrapperComponent
)
