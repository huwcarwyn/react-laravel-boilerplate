import { initialState } from 'store/initialState'
import { requestActions as actions } from 'store/actions'
import { requestReducer as reducer } from 'store/reducers/requests.reducer'

describe('requests reducer', () => {
  const { requests } = initialState

  it('initialises state properly', () => {
    expect(reducer(requests, {})).to.deep.equal({})
  })

  it('handles SUCCESS correctly', () => {
    const expectedState = {
      test: 1
    }

    expect(reducer(requests, {
      type: actions.FETCH,
      actionType: 'test'
    })).to.deep.equal(expectedState)
  })

  it('handles success correctly', () => {
    const initialFetch = {
      test: 1
    }

    const expectedState = {
      test: 0
    }

    expect(reducer(initialFetch, {
      type: actions.SUCCESS,
      actionType: 'test'
    })).to.deep.equal(expectedState)
  })
})
