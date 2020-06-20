import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './rootEpic'
import rootReducer from './rootReducer'

const epicMiddleware = createEpicMiddleware()

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware],
    preloadedState,
    enhancers: [],
  })

  epicMiddleware.run(rootEpic)

  return store
}
