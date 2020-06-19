import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  listId: '',
  coachName: '',
  students: [],
}

const classSlice = createSlice({
  name: 'class',
  initialState,
  reducers: {
    fetchStudentlistAsync: (state, action) => {
      state.isLoading = true
    },

    fetchStudentlistSuccess: (state, action) => {
      const {
        listId = initialState.listId,
        coachName = initialState.coachName,
        students = initialState.students,
      } = action.payload

      state.isLoading = false
      state.listId = listId
      state.coachName = coachName
      state.students = students
    },

    fetchStudentlistFailure: (state, action) => {
      state = initialState
    },
  },
})

export const {
  fetchStudentlistAsync,
  fetchStudentlistSuccess,
  fetchStudentlistFailure,
} = classSlice.actions

export default classSlice.reducer
