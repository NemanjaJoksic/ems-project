import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type CounterStore = {
  counter: number
  actions: {
    increment: () => void
  }
}

export const useCounterStore = create(
  immer<CounterStore>((set) => ({
    counter: 0,
    actions: {
      increment: () => {
        set((store) => void (store.counter = store.counter + 1))
      },
    },
  }))
)
