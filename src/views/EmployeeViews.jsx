/* eslint-disable react/prop-types */
import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeNav } from "../components/nav/EmployeeNav"
import { Welcome } from "../components/welcome/Welcome"
import { TicketList } from "../components/tickets/TicketList"
import { EmployeeList } from "../components/employees/EmployeeList"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { CustomerList } from "../components/customers/CustomersList"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { EmployeeForm } from "../components/forms/EmployeeForm"

export const EmployeeViews = ({ currentUser }) => {

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <EmployeeNav />
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

                <Route path="profile">
                    <Route index element={<EmployeeForm currentUser={currentUser} />} />
                </Route>
            </Route>
        </Routes>
    )
}