import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Job } from './model/jobModel'

type JobStore = {
  counter: number | undefined
  jobs: Job[]
  actions: {
    getCounter: () => Promise<void>
    getJobs: () => Promise<void>
  }
}

export const useJobStore = create(
  immer<JobStore>((set) => ({
    counter: undefined,
    jobs: [],
    actions: {
      getCounter: async () => {
        set((store) => void (store.counter = 47))
      },

      getJobs: async () => {
        set(
          (store) =>
            void (store.jobs = [
              { id: 1, name: 'Software Engineer' } as Job,
              { id: 1, name: 'Software Engineer' } as Job,
              { id: 1, name: 'Software Engineer' } as Job,
              { id: 1, name: 'Software Engineer' } as Job,
            ])
        )
      },
    },
  }))
)
