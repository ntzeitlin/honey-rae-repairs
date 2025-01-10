import { Routes, Route, Outlet } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import { Welcome } from "../components/welcome/Welcome"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { EmployeeList } from "../components/employees/EmployeeList"
import { TicketList } from "../components/tickets/TicketList"
import { CustomerList } from "../components/customers/CustomersList"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { useState, useEffect } from "react"


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    setCurrentUser(honeyUserObject)

  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }>
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList currentUser={currentUser} />} />

        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>

        <Route path="customers" >
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
          {/* path here is equal to a routing parameter variable using the : */}
        </Route>
      </Route>
    </Routes>
  )
}
