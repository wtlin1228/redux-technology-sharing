import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// utils
import { studentsCountSelector } from 'core/Class'

// assets

// actions
import { fetchStudentlist } from 'core/Class'

// components
import ClassList from '../components/ClassList'

// self-defined-components

const ClassListContainer = ({
  students,
  isLoading,
  studentsCount,
  fetchStudentlist,
}) => {
  const [selectedListId, setSelectedListId] = useState('0')

  const handleClassChange = useCallback(
    (listId) => fetchStudentlist({ listId }),
    [fetchStudentlist]
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
      fetchStudentlist,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ClassListContainer)
