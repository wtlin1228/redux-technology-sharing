export const CLASS_FETCH_STUDENTLIST_ASYNC = 'class/fetchStudentlist:async'
export const CLASS_FETCH_STUDENTLIST_SUCCESS = 'class/fetchStudentlist:success'
export const CLASS_FETCH_STUDENTLIST_FAILURE = 'class/fetchStudentlist:failure'

export const fetchStudentlistAsync = (payload) => ({
  type: CLASS_FETCH_STUDENTLIST_ASYNC,
  payload,
})

export const fetchStudentlistSuccess = (payload) => ({
  type: CLASS_FETCH_STUDENTLIST_SUCCESS,
  payload,
})

export const fetchStudentlistFailure = (payload) => ({
  type: CLASS_FETCH_STUDENTLIST_FAILURE,
  payload,
})
