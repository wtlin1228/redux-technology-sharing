import { combineReducers } from 'redux'
import {
  CLASS_ASYNC_FETCH_STUDENTLIST,
  CLASS_FETCH_STUDENTLIST_SUCCESS,
  CLASS_FETCH_STUDENTLIST_FAILURE,
} from './action'

const initStudentlist = {
  listId: '',
  coachName: '',
  students: [],
  isLoading: false,
}

const studentlist = (state = initStudentlist, action) => {
  switch (action.type) {
    case CLASS_ASYNC_FETCH_STUDENTLIST:
      return {
        ...state,
        isLoading: true,
      }

    case CLASS_FETCH_STUDENTLIST_SUCCESS:
      const {
        listId = initStudentlist.listId,
        coachName = initStudentlist.coachName,
        students = initStudentlist.students,
      } = action.payload
      return {
        listId,
        coachName,
        students,
        isLoading: false,
      }

    case CLASS_FETCH_STUDENTLIST_FAILURE:
      return initStudentlist

    default:
      return state
  }
}

export default combineReducers({
  studentlist,
})
