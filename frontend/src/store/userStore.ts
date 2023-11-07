import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { User } from './model/userModel'

type UserStore = {
  user: User | undefined
  actions: {
    isUsedLoggedIn: () => boolean
    getUser: () => Promise<void>
    login: (username: string, password: string) => Promise<boolean>
    logout: () => void
  }
}

export const useUserStore = create(
  immer<UserStore>((set, get) => ({
    user: undefined,
    actions: {
      isUsedLoggedIn: () => localStorage.getItem('EMS_PRJECT_TOKEN') !== null,
      getUser: async () => {
        console.log('getUser() called')
        const token = localStorage.getItem('EMS_PRJECT_TOKEN')
        if (token !== null) {
          set(
            (store) =>
              void (store.user = { firstName: 'Test', lastName: 'User' })
          )
        }
      },
      login: async (username: string, password: string) => {
        if (username === 'user' && password === 'pass') {
          localStorage.setItem('EMS_PRJECT_TOKEN', 'tokenValue')
          await get().actions.getUser()
          return true
        } else {
          return false
        }
      },
      logout: () => {
        localStorage.removeItem('EMS_PRJECT_TOKEN')
      },
    },
  }))
)
