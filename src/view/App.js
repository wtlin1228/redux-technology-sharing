import React from 'react'

// utils
import { ClassProvider } from 'context/Class'

// assets

// actions

// components
import Class from 'view/Class'

// self-defined-components

const App = () => {
  return (
    <ClassProvider>
      <Class />
    </ClassProvider>
  )
}

export default App
