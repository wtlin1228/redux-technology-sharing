import React from 'react'

const Foo = () => {
  console.log(`Foo is re-render`)

  return (
    <>
      <div>Foo</div>
      <A />
    </>
  )
}

export default React.memo(Foo)

const A = () => {
  console.log(`A is re-render`)
  return (
    <>
      <div>A</div>
      <B />
    </>
  )
}

const B = () => {
  console.log(`B is re-render`)
  return (
    <>
      <div>B</div>
      <C />
    </>
  )
}

const C = () => {
  console.log(`C is re-render`)
  return (
    <>
      <div>C</div>
      <D />
    </>
  )
}

const D = () => {
  console.log(`D is re-render`)
  return (
    <>
      <div>D</div>
    </>
  )
}
