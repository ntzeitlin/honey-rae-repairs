import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCustomerById } from "../../services/customerService"
import "./Customers.css"

export const CustomerDetails = () => {
    // /customers/3
    // path="/customers/:customerId"

    // useParams hook returns value of route path variable as an object
    // destructure object to access variable directly.

    const { customerId } = useParams()
    const [customerInfo, setCustomerInfo] = useState([])

    useEffect(() => {
        getCustomerById(customerId).then((data) => {
            const customerObj = data[0]
            setCustomerInfo(customerObj)
        })
    }, [customerId])

    return (
        <section className="customer">
            <header className="customer-header">{customerInfo.user?.fullName}</header>
            <div>
                <span className="customer-info">Email : </span>
                {customerInfo.user?.email}
            </div>
            <div>
                <span className="customer-info">Address : </span>
                {customerInfo.address}
            </div>
            <div>
                <span className="customer-info">Phone Number : </span>
                {customerInfo.phoneNumber}
            </div>
        </section>
    )

}