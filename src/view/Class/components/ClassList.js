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
const tableRows = [
  {
    id: '1',
    name: '123',
    username: '123',
    parent: '123',
    reset: '123',
    actions: '123',
  },
  {
    id: '2',
    name: '456',
    username: '456',
    parent: '456',
    reset: '456',
    actions: '456',
  },
  {
    id: '3',
    name: '789',
    username: '789',
    parent: '789',
    reset: '789',
    actions: '789',
  },
  {
    id: '4',
    name: '321',
    username: '321',
    parent: '321',
    reset: '321',
    actions: '321',
  },
  {
    id: '5',
    name: '654',
    username: '654',
    parent: '654',
    reset: '654',
    actions: '654',
  },
]

const ClassList = () => {
  const classes = useStyles()

  const handleTabClick = (value) => {
    console.log(value)
  }

  const isLoading = true

  return (
    <div className={classes.root}>
      <CommonVerticalTabs onTabClick={handleTabClick} tabs={tabs}>
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
            <CommonTable columns={tableColumns} rows={tableRows} />
          )}
        </Box>
      </CommonVerticalTabs>
    </div>
  )
}

export default ClassList
