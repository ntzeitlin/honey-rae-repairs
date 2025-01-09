import { useParams } from "react-router-dom"
import "./Employees.css"
import { useEffect, useState } from "react"
import { getEmployeeById } from "../../../services/employeeService"

export const EmployeeDetails = () => {

    const { employeeId } = useParams()
    const [employeeInfo, setEmployeeInfo] = useState([])

    useEffect(() => {
        getEmployeeById(employeeId).then(employeeObject => setEmployeeInfo(employeeObject))
        console.log(employeeInfo)
    }, [employeeId])

    return (
        <section className="employee">
            <header className="employee-header">
                {employeeInfo.user?.fullName}
            </header>
            <div>
                <span className="employee-info">Email : </span>
                {employeeInfo.user?.email}
            </div>
            <div>
                <span className="employee-info">Specialty : </span>
                {employeeInfo.specialty}
            </div>
            <div>
                <span className="employee-info">Rate : </span>
                {employeeInfo.rate}
            </div>
            <div>
                <span className="employee-info"># of Working Tickets : </span>
                {employeeInfo.employeeTickets?.length}
            </div>

        </section>
    )

}