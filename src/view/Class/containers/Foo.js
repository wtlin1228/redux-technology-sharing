import React from 'react'
import { connect } from 'react-redux'
import Foo from '../components/Foo'

const FooContainer = () => {
  return <Foo />
}

export default connect(null, null)(FooContainer)
