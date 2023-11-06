import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { User } from './model/userModel'

type UserStore = {
  actions: {
    getLoggedInUser: () => User | undefined
    login: (username: string, password: string) => Promise<boolean>
    logout: () => void
  }
}

export const useUserStore = create(
  immer<UserStore>(() => ({
    loggedInUser: undefined,
    actions: {
      getLoggedInUser: () => {
        const loggedInUserJson = localStorage.getItem('loggedInUser')
        if (loggedInUserJson !== null) {
          return JSON.parse(loggedInUserJson) as User
        } else {
          return undefined
        }
      },
      login: async (username: string, password: string) => {
        if (username === 'user' && password === 'pass') {
          localStorage.setItem('loggedInUser', JSON.stringify({username: username} as User))
          return true
        } else {
          return false
        }
      },
      logout: () => {
        localStorage.removeItem('loggedInUser')
      },
    },
  }))
)
