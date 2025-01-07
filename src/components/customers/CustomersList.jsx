import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../../services/userService"
import "./Customers.css"
import { User } from "../user/User"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => setCustomers(customerArray))
    }, [])

    return (
        <div className="customers">
            {
                customers.map((customerObj) => {
                    return (
                        <User userObj={customerObj} key={customerObj.id} />
                    )
                })
            }
        </div>
    )
}