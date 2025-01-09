import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"
import { User } from "../user/User"
import "./Employees.css"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState([])

    useEffect(() => {
        getAllEmployees().then(employeeArray => setEmployeeList(employeeArray))
    }, [])

    return <div className="employees">
        {
            employeeList.map((employeeObj) => {
                return (
                    <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id} >
                        <User userObj={employeeObj.user} />
                    </Link>
                )
            })
        }
    </div>
}