export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=user").then(res => res.json())
}

export const getEmployeeById = async (employeeId) => {
    const response = await fetch(`http://localhost:8088/employees?id=${employeeId}&_expand=user&_embed=employeeTickets`)
    const data = await response.json()
    return data[0]
}