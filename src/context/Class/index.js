import { useReducer } from 'react'
import constate from 'constate'
import classReducer, { initialState } from './slice'

export {
  fetchStudentlistAsync,
  fetchStudentlistSuccess,
  fetchStudentlistFailure,
} from './slice'

const [ClassProvider, useClassContext] = constate(() =>
  useReducer(classReducer, initialState)
)

export { ClassProvider, useClassContext }
