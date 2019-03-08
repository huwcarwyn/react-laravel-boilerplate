import { initialState } from 'store/initialState'
import { userActions as actions } from 'store/actions'
import { sessionReducer as reducer } from 'store/reducers/session/session.reducer'

describe('session reducer', () => {
  const { session } = initialState

  const mockUser = {
    id: 1,
    firstName: 'Carwyn',
    lastName: 'Stephen',
    email: 'test@test.com'
  }

  it('initialises state properly', () => {
    expect(reducer(undefined, {})).to.deep.equal(session)
  })

  it('correctly handles SET_CURRENT_USER_INFO', () => {
    const user = {
      id: mockUser.id,
      first_name: mockUser.firstName,
      last_name: mockUser.lastName,
      email: mockUser.email
    }

    const expectedState = {
      currentUser: user.id
    }

    expect(
      reducer(session, {
        type: actions.SET_CURRENT_USER_INFO,
        user
      })
    ).to.deep.equal(expectedState)
  })
})
