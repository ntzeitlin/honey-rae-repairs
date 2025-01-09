import { Routes, Route, Outlet } from "react-router-dom"
import "./App.css"
import { CustomerList } from "./components/customers/CustomersList"
import { EmployeeList } from "./components/employees/EmployeeList"
import { TicketList } from "./components/tickets/TicketList"
import { NavBar } from "./components/nav/NavBar"
import { Welcome } from "./components/welcome/Welcome"
import { CustomerDetails } from "./components/customers/CustomerDetails"

export const App = () => {
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
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="customers" >
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
          {/* path here is equal to a routing parameter variable using the : */}
        </Route>
      </Route>
    </Routes>
  )
}
