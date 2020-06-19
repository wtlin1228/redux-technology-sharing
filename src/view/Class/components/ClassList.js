import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// utils

// assets

// actions

// components
import ReactLoading from 'react-loading'
import Box from '@material-ui/core/Box'
import { CommonTable, CommonVerticalTabs } from 'view/Common'

// self-defined-components
const useStyles = makeStyles(
  {
    root: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      minWidth: 650,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loading: {
      marginRight: 150,
    },
  },
  { name: 'classList' }
)

const tabs = [
  { label: '班級 1', value: 1 },
  { label: '班級 2', value: 2 },
  { label: '班級 3', value: 3 },
]

const tableColumns = [
  { key: 'name', label: '學生顯示名稱' },
  { key: 'username', label: '帳號' },
  { key: 'parent', label: '密碼老師' },
  { key: 'reset', label: '重設密碼' },
  { key: 'actions', label: '操作' },
]

const ClassList = ({ onTabClick, students, isLoading }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CommonVerticalTabs onTabClick={onTabClick} tabs={tabs}>
        <Box className={classes.box}>
          {isLoading ? (
            <ReactLoading
              className={classes.loading}
              type="spin"
              color="grey"
              height={100}
              width={100}
            />
          ) : (
            <CommonTable columns={tableColumns} rows={students} />
          )}
        </Box>
      </CommonVerticalTabs>
    </div>
  )
}

export default ClassList
