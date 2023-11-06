import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type EmployeeStore = {
  counter: number | undefined
  actions: {
    getCounter: () => Promise<void>
  }
}

export const useEmployeeStore = create(
  immer<EmployeeStore>((set) => ({
    counter: undefined,
    actions: {
      getCounter: async () => {
        set((store) => void(store.counter = 746))
      },
    },
  }))
)
