import axios from 'axios'
import getCurrentUserInfo from 'store/action-creators/session'

describe('getCurrentUserInfo', () => {
  beforeEach(() => {
    sinon.stub(axios, 'get').resolves({
      status: 200,
      data: {
        first_name: 'Carwyn',
        last_name: 'Stephen'
      }
    })
  })

  it('dispatches the correct action with the response data', (done) => {

  })
})
