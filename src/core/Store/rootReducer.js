import { combineReducers } from 'redux'

import { classReducer } from 'core/Class'

const rootReducer = combineReducers({
  class: classReducer,
})

export default rootReducer
