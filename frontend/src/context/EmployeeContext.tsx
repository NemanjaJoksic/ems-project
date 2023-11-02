import { createContext, useState } from 'react'

export type EmployeContextType = {
  showCreateEmployeeModal: boolean
  showUpdateEmployeeModal: boolean
  showEmployeeDetailsModal: boolean
  setShowCreateEmployeeModal: (showCreateEmployeeModal: boolean) => void
  setShowUpdateEmployeeModal: (showCreateEmployeeModal: boolean) => void
  setShowEmployeeDetailsModal: (showEmployeeDetailsModal: boolean) => void
}

export const EmployeeContext = createContext<EmployeContextType | null>(null)

export const VideoSharingWebsiteProvider = (props: React.PropsWithChildren) => {
  const [showCreateEmployeeModal, setShowCreateEmployeeModal] = useState(false)
  const [showUpdateEmployeeModal, setShowUpdateEmployeeModal] = useState(false)
  const [showEmployeeDetailsModal, setShowEmployeeDetailsModal] =
    useState(false)

  return (
    <EmployeeContext.Provider
      value={{
        showCreateEmployeeModal,
        showUpdateEmployeeModal,
        showEmployeeDetailsModal,
        setShowCreateEmployeeModal,
        setShowUpdateEmployeeModal,
        setShowEmployeeDetailsModal,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  )
}
