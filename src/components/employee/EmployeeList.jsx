import { useEffect, useState } from "react"
import { getAllEmployees } from "../../../services/employeeService"
import { User } from "../user/User"
import "./Employees.css"

export const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState([])

    useEffect(() => {
        getAllEmployees().then(employeeArray => setEmployeeList(employeeArray))
    }, [])

    return <div className="employees">
        {
            employeeList.map((employeeObj) => {
                return (
                    <User userObj={employeeObj.user} key={employeeObj.id} />
                )
            })
        }
    </div>
}