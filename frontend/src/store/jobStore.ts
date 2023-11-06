import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type JobStore = {
  counter: number | undefined
  actions: {
    getCounter: () => Promise<void>
  }
}

export const useJobStore = create(
  immer<JobStore>((set) => ({
    counter: undefined,
    actions: {
      getCounter: async () => {
        set((store) => void (store.counter = 47))
      },
    },
  }))
)
