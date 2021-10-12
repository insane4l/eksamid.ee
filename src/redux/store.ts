import {createStore} from 'redux'
import testsReducer from './reducers/testsReducer'

const store = createStore(testsReducer)

export default store