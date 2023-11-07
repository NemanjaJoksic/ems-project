import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Employee } from './model/employeeModel'

type EmployeeStore = {
  counter: number | undefined
  isLoadingEmployee: boolean
  employee: Employee | undefined
  employees: Employee[]
  actions: {
    getCounter: () => Promise<void>
    getEmployees: () => Promise<void>
    getEmployeeById: (id: number) => Promise<void>
  }
}

export const useEmployeeStore = create(
  immer<EmployeeStore>((set) => ({
    counter: undefined,
    isLoadingEmployee: false,
    employee: undefined,
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
                firstName: 'Nemanja',
                lastName: 'Joksic',
                email: 'nemanja.joksic@mail.com',
              } as Employee,
              {
                id: 1,
                employeeId: 'EMP0001',
                firstName: 'Nemanja',
                lastName: 'Joksic',
                email: 'nemanja.joksic@mail.com',
              } as Employee,
              {
                id: 1,
                employeeId: 'EMP0001',
                firstName: 'Nemanja',
                lastName: 'Joksic',
                email: 'nemanja.joksic@mail.com',
              } as Employee,
              {
                id: 1,
                employeeId: 'EMP0001',
                firstName: 'Nemanja',
                lastName: 'Joksic',
                email: 'nemanja.joksic@mail.com',
              } as Employee,
            ])
        )
      },

      getEmployeeById: async (id: number) => {
        set((store) => void (store.isLoadingEmployee = true))

        setTimeout(() => {
          set((store) => {
            store.employee = {
              id: 1,
              employeeId: 'EMP0001',
              firstName: 'Nemanja',
              lastName: 'Joksic',
              email: 'nemanja.joksic@mail.com',
            } as Employee
            store.isLoadingEmployee = false
          })
        }, 1000)
      },
    },
  }))
)
