import { Outlet, Routes, Route } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome";
import { CustomerNav } from "../components/nav/CustomerNav";
import { TicketList } from "../components/tickets/TicketList";
import { TicketForm } from "../components/forms/TicketForm";

// customer email: "wthorneloe1@usa.gov"

// eslint-disable-next-line react/prop-types
export const CustomerViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <CustomerNav />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
                <Route path="tickets">
                    <Route
                        index
                        element={<TicketList currentUser={currentUser} />}
                    />
                    <Route
                        path="create"
                        element={<TicketForm currentUser={currentUser} />}
                    />
                </Route>
            </Route>
        </Routes>
    );
};
