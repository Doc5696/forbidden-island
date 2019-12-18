import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from './reducer'

const initStore = () => createStore(
    rootReducer,
    // applyMiddleware(),
  )
  
  export default initStore