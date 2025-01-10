export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=user").then(res => res.json())
}

export const getEmployeeById = async (employeeId) => {
    const response = await fetch(`http://localhost:8088/employees?id=${employeeId}&_expand=user&_embed=employeeTickets`)
    const data = await response.json()
    return data[0]
}
export const getEmployeeByUserId = async (employeeId) => {
    const response = await fetch(`http://localhost:8088/employees?userId=${employeeId}&_expand=user&_embed=employeeTickets`)
    const data = await response.json()
    return data[0]
}

export const updateEmployee = async (employeeObj) => {
    return await fetch(`http://localhost:8088/employees/${employeeObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObj)
    })
}