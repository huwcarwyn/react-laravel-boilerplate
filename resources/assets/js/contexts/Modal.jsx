import { createContext } from 'react'

export const { Provider: ModalProvider, Consumer: ModalConsumer } = createContext({
  component: () => <div>No modal component supplied</div>,
  modalProps: {},
  showModal: () => undefined,
  hideModal: () => undefined
})
