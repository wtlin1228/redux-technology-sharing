import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// utils
import { getStudentsByListId, studentsCountSelector } from 'core/Class'

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
  studentsCount,
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
    <>
      <h1 style={{ position: 'fixed', top: 0, left: 24 }}>
        學生數：{studentsCount}
      </h1>
      <ClassList
        onTabClick={setSelectedListId}
        students={students}
        isLoading={isLoading}
      />
    </>
  )
}

const mapStateToProps = (state) => ({
  students: state.class.students,
  isLoading: state.class.isLoading,
  studentsCount: studentsCountSelector(state),
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
