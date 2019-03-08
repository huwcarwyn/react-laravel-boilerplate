import { mockStore } from 'store/test-utils/mock-store'
import { flashMessage, hideMessage } from 'store/action-creators/flashMessages'

import { flashMessageActions as actions } from 'store/actions'

describe('flashMessages action creators', () => {
  const store = mockStore({})

  let message

  let clock

  beforeEach(() => {
    store.clearActions()
    // Make sure to only fake the Date object here, or we will mess with
    // the internal workings of async functions, causing the tests to timeout.
    clock = sinon.useFakeTimers({
      toFake: ['Date']
    })

    message = {
      messageType: 'success',
      message: 'test message',
      uid: Date.now()
    }
  })

  afterEach(() => {
    clock.restore()
  })

  describe('flashMessage', () => {
    it('dispatches the correct actions', async () => {
      const expectedActions = [
        { type: actions.SHOW_MESSAGE, ...message },
        { type: actions.HIDE_MESSAGE, uid: message.uid }
      ]

      await store.dispatch(flashMessage('success', 'test message', 1))

      expect(store.getActions()).to.deep.equal(expectedActions)
    })
  })

  describe('hideMessage', () => {
    it('dispatches the correct action', () => {
      const expectedActions = [{ type: actions.HIDE_MESSAGE, uid: message.uid }]

      store.dispatch(hideMessage(message.uid))

      expect(store.getActions()).to.deep.equal(expectedActions)

      clock.restore()
    })
  })
})
