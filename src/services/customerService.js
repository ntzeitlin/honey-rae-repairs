export const getCustomerById = async (customerId) => {
    const response = await fetch(`http://localhost:8088/customers?userId=${customerId}&_expand=user`)
    const data = await response.json()
    return data
}