import { useEffect, useState } from "react"
import { getAllTickets } from "../../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket"
import { FilterBar } from "./FilterBar"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getAllTickets().then((ticketsArray) => {
            setAllTickets(ticketsArray)
        })
    }, [])

    useEffect(() => {
        if (showEmergencyOnly) {
            const emergencyTickets = allTickets.filter(
                (ticket) => ticket.emergency
            )
            setFilteredTickets(emergencyTickets)
        } else {
            setFilteredTickets(allTickets)
        }

    }, [showEmergencyOnly, allTickets])

    useEffect(() => {
        setFilteredTickets(allTickets.filter(ticket => ticket.description.toLowerCase().includes(searchTerm.toLowerCase())))

    }, [allTickets, searchTerm])

    return <div className="tickets-container">
        <h2>Tickets</h2>
        <FilterBar setSearchTerm={setSearchTerm} setShowEmergencyOnly={setShowEmergencyOnly} />
        <article className="tickets">
            {filteredTickets.map(ticketObj => {
                return <Ticket ticket={ticketObj} key={ticketObj.id} />
            })}
        </article>
    </div>
}