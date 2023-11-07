import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Employee } from './model/employeeModel'

type EmployeeStore = {
  counter: number | undefined
  employees: Employee[]
  actions: {
    getCounter: () => Promise<void>
    getEmployees: () => Promise<void>
  }
}

export const useEmployeeStore = create(
  immer<EmployeeStore>((set) => ({
    counter: undefined,
    employees: [],
    actions: {
      getCounter: async () => {
        set((store) => void (store.counter = 746))
      },

      getEmployees: async () => {
        set(
          (store) =>
            void (store.employees = [
              {
                id: 1,
                employeeId: 'EMP0001',
                name: 'Nemanja Joksic',
                email: 'nemanja.joksic@mail.com',
              } as Employee,
              {
                id: 1,
                employeeId: 'EMP0001',
                name: 'Nemanja Joksic',
                email: 'nemanja.joksic@mail.com',
              } as Employee,
              {
                id: 1,
                employeeId: 'EMP0001',
                name: 'Nemanja Joksic',
                email: 'nemanja.joksic@mail.com',
              } as Employee,
              {
                id: 1,
                employeeId: 'EMP0001',
                name: 'Nemanja Joksic',
                email: 'nemanja.joksic@mail.com',
              } as Employee,
            ])
        )
      },
    },
  }))
)
