import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

const STORAGE_KEY = 'job_app-state'

function loadState() {
  if (typeof localStorage === 'undefined') {
    return undefined
  }

  const savedState = localStorage.getItem(STORAGE_KEY)

  if (!savedState) {
    return undefined
  }

  try {
    return JSON.parse(savedState)
  } catch {
    return undefined
  }
}

const store = createStore(rootReducer, loadState())

store.subscribe(() => {
  if (typeof localStorage === 'undefined') {
    return
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()))
})

export default store
