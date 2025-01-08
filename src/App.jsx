import "./App.css"
import { CustomerList } from "./components/customers/CustomersList"
import { EmployeeList } from "./components/employee/EmployeeList"
import { TicketList } from "./components/tickets/TicketList"

export const App = () => {
  return <>
    <EmployeeList />
    <CustomerList />
    <TicketList />
  </>
}
