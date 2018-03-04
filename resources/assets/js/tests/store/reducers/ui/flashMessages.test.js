import { initialState } from 'store/initialState'
import { flashMessageActions as actions } from 'store/actions'
import { flashMessagesReducer as reducer } from 'store/reducers/ui/flashMessages.reducer'

describe('flash messages reducer', () => {
  const { flashMessages } = initialState

  let message

  beforeEach(() => {
    message = {
      messageType: 'success',
      message: 'test message',
      uid: Date.now()
    }
  })

  it('initialises state properly', () => {
    expect(reducer(undefined, {})).to.deep.equal(flashMessages)
  })

  it('correctly handles SHOW_MESSAGE', () => {
    const expectedState = {
      ...flashMessages,
      [message.uid]: {
        type: message.messageType,
        message: message.message
      }
    }

    expect(reducer(flashMessages, {
      type: actions.SHOW_MESSAGE,
      ...message
    })).to.deep.equal(expectedState)
  })

  it('correctly handles HIDE_MESSAGE', () => {
    const state = {
      ...flashMessages,
      [message.uid]: {
        messageType: message.messageType,
        message: message.message
      }
    }

    expect(reducer(state, {
      type: actions.HIDE_MESSAGE,
      uid: message.uid
    })).to.deep.equal(flashMessages)
  })
})
