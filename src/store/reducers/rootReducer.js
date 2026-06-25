import { combineReducers } from 'redux'
import userReducer from './userReducer'
import skillsReducer from './skillsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  skills: skillsReducer,
})

export default rootReducer
