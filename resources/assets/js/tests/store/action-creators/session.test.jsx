import axios from 'axios'
import { mockStore } from 'tests/store/mock-store'
import { getCurrentUserInfo } from 'store/action-creators/session'

import { sessionActions as actions } from 'store/actions'

describe('session action creators', () => {
  describe('getCurrentUserInfo', () => {
    const store = mockStore({})

    const userData = {
      first_name: 'Carwyn',
      last_name: 'Stephen'
    }

    beforeEach(() => {
      sinon.stub(axios, 'get').resolves({
        status: 200,
        data: userData
      })
    })

    it('dispatches the correct action with the response data', async () => {
      const expectedActions = [
        { type: actions.SET_CURRENT_USER_INFO,
          payload: userData
        }
      ]

      await store.dispatch(getCurrentUserInfo())

      expect(store.getActions()).to.deep.equal(expectedActions)
    })
  })
})
