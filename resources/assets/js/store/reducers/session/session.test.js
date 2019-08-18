import { initialState } from 'store/initialState'
import { userActions as actions } from 'store/actions'
import { sessionReducer as reducer } from 'store/reducers/session/session.reducer'

describe('session reducer', () => {
  const { session } = initialState

  const mockUser = {
    slug: 'xVd2Q',
    firstName: 'Carwyn',
    lastName: 'Stephen',
    email: 'test@test.com'
  }

  it('initialises state properly', () => {
    expect(reducer(undefined, {})).to.deep.equal(session)
  })

  it('correctly handles SET_CURRENT_USER_INFO', () => {
    const user = {
      slug: mockUser.slug,
      first_name: mockUser.firstName,
      last_name: mockUser.lastName,
      email: mockUser.email
    }

    const expectedState = {
      currentUser: user.slug
    }

    expect(
      reducer(session, {
        type: actions.SET_CURRENT_USER_INFO,
        users: user
      })
    ).to.deep.equal(expectedState)
  })
})
