import { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import UserStore from './Store/UserStore'
import './index.css'

interface State {
  user: UserStore
}

const user = new UserStore()

export const API_URL = process.env.API_URL ? process.env.API_URL : 'http://176.57.218.115:8080/api'
export const REACT_APP_FILE_PATH = process.env.REACT_APP_FILE_PATH ? process.env.REACT_APP_FILE_PATH : 'http://176.57.218.115:8080/files'

export const Context = createContext<State>({
  user
})

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <Context.Provider value={{
    user
  }}>
    <App />
  </Context.Provider>
)