import axios from 'axios'
import { mockStore } from 'store/test-utils/mock-store'
import { userActions as actions } from 'store/actions'
import { getCurrentUserInfo } from 'store/action-creators/session'

describe('session action creators', () => {
  describe('getCurrentUserInfo', () => {
    const store = mockStore({})

    const userData = {
      slug: 'xVdQ2',
      first_name: 'Carwyn',
      last_name: 'Stephen'
    }

    beforeEach(() => {
      sinon.stub(axios, 'get').resolves({
        status: 200,
        data: { data: { ...userData } }
      })
    })

    it('dispatches the correct action with the response data', async () => {
      const expectedActions = [
        { type: actions.SET_CURRENT_USER_INFO, users: userData }
      ]

      await store.dispatch(getCurrentUserInfo())

      expect(store.getActions()).to.deep.equal(expectedActions)
    })
  })
})
