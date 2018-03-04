import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middleware = [thunk]
export const mockStore = configureStore(middleware)
