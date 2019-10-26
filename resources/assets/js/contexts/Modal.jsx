import { createContext } from 'react'

const ModalContext = createContext({
  component: () => <div>No modal component supplied</div>,
  modalProps: {},
  showModal: () => undefined,
  hideModal: () => undefined
})

const { Provider: ModalProvider, Consumer: ModalConsumer } = ModalContext

export { ModalConsumer, ModalProvider, ModalContext }
