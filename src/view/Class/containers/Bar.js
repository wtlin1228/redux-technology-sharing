import React from 'react'
import { useClassContext } from 'context/Class'

const Bar = () => {
  console.log('Bar is re-render')
  const [classState] = useClassContext()

  const { isLoading } = classState

  return (
    <>
      <div>Bar {isLoading}</div>
    </>
  )
}

export default Bar
