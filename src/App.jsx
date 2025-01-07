import "./App.css"
import { CustomerList } from "./components/customers/CustomersList"
import { TicketList } from "./components/tickets/TicketList"

export const App = () => {
  return <>
    <CustomerList />
    <TicketList />
  </>
}
