import { useReducer } from 'react'
import constate from 'constate'
import classReducer, { classState } from './reducer'

export {
  fetchStudentlistAsync,
  fetchStudentlistSuccess,
  fetchStudentlistFailure,
} from './action.js'

const [ClassProvider, useClassContext] = constate(() =>
  useReducer(classReducer, classState)
)

export { ClassProvider, useClassContext }
