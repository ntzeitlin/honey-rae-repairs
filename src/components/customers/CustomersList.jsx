import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../../services/userService"
import "./Customers.css"
import { User } from "../user/User"
import { Link } from "react-router-dom"

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
                        <Link to={`/customers/${customerObj.id}`} key={customerObj.id} >
                            <User userObj={customerObj} />
                        </Link>
                    )
                })
            }
        </div>
    )
}