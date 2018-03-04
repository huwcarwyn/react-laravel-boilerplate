import { mockStore } from 'tests/store/mock-store'
import { flashMessage, hideMessage } from 'store/action-creators/flashMessages'

import { flashMessageActions as actions } from 'store/actions'

describe('flashMessages action creators', () => {
  const store = mockStore({})

  let message

  beforeEach(() => {
    store.clearActions()

    message = {
      messageType: 'success',
      message: 'test message',
      uid: Date.now()
    }
  })

  describe('flashMessage', () => {
    it('dispatches the correct actions', async () => {
      const expectedActions = [
        { type: actions.SHOW_MESSAGE,
          ...message
        },
        { type: actions.HIDE_MESSAGE,
          uid: message.uid
        }
      ]

      await store.dispatch(flashMessage('success', 'test message', 1))

      expect(store.getActions()).to.deep.equal(expectedActions)
    })
  })

  describe('hideMessage', () => {
    it('dispatches the correct action', () => {
      const expectedActions = [
        { type: actions.HIDE_MESSAGE,
          uid: message.uid
        }
      ]

      store.dispatch(hideMessage(message.uid))

      expect(store.getActions()).to.deep.equal(expectedActions)
    })
  })
})
