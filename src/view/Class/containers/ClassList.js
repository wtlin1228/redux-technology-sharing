import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// utils
import { getStudentsByListId } from 'core/Class'

// assets

// actions
import {
  fetchStudentlistAsync,
  fetchStudentlistSuccess,
  fetchStudentlistFailure,
} from 'core/Class'

// components
import ClassList from '../components/ClassList'

// self-defined-components

const ClassListContainer = ({
  students,
  isLoading,
  fetchStudentlistAsync,
  fetchStudentlistSuccess,
  fetchStudentlistFailure,
}) => {
  const [selectedListId, setSelectedListId] = useState('0')

  const handleClassChange = useCallback(
    (listId) => {
      fetchStudentlistAsync({})
      getStudentsByListId(listId)
        .then(function updateClassState(rsp) {
          fetchStudentlistSuccess(rsp)
        })
        .catch(fetchStudentlistFailure)
    },
    [fetchStudentlistAsync, fetchStudentlistSuccess, fetchStudentlistFailure]
  )

  useEffect(() => {
    handleClassChange(selectedListId)
  }, [selectedListId, handleClassChange])

  return (
    <ClassList
      onTabClick={setSelectedListId}
      students={students}
      isLoading={isLoading}
    />
  )
}

const mapStateToProps = (state) => ({
  students: state.class.studentlist.students,
  isLoading: state.class.studentlist.isLoading,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchStudentlistAsync,
      fetchStudentlistSuccess,
      fetchStudentlistFailure,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ClassListContainer)
