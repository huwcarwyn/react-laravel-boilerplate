import { currentUserSelector } from 'store/selectors/session'

describe('session selector', () => {
  describe('currentUserSelector', () => {
    it('retrieves the current user from the store', () => {
      const userObject = {
        id: 1,
        name: 'Carwyn Stephen'
      }

      const storeObject = {
        session: {
          currentUser: 1
        },
        entities: {
          users: {
            1: {...userObject}
          }
        }
      }

      expect(currentUserSelector(storeObject)).to.deep.equal(userObject)
    })
  })
})
