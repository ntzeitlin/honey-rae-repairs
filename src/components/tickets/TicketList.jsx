/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket"
import { FilterBar } from "./FilterBar"

export const TicketList = ({ currentUser }) => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [showOpenTicketsOnly, setShowOpenTicketsOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getAndSetTickets = () => {
        getAllTickets().then((ticketsArray) => {
            if (currentUser.isStaff) {
                setAllTickets(ticketsArray)
            } else {
                const customerTickets = ticketsArray.filter(ticket => ticket.userId === currentUser.id)
                setAllTickets(customerTickets)
            }
        })
    }

    useEffect(() => {
        getAndSetTickets()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser])


    // Toggle Emergency Tickets: 
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

    // Toggle Customer Open Tickets
    useEffect(() => {
        if (showOpenTicketsOnly) {
            const openTickets = allTickets.filter(ticket => !ticket.dateCompleted)
            setFilteredTickets(openTickets)
        } else {
            setFilteredTickets(allTickets)
        }
    }, [allTickets, showOpenTicketsOnly])


    useEffect(() => {
        setFilteredTickets(allTickets.filter(ticket => ticket.description.toLowerCase().includes(searchTerm.toLowerCase())))

    }, [allTickets, searchTerm])

    return <div className="tickets-container">
        <h2>Tickets</h2>
        <FilterBar setSearchTerm={setSearchTerm} setShowEmergencyOnly={setShowEmergencyOnly} currentUser={currentUser} setShowOpenTicketsOnly={setShowOpenTicketsOnly} />
        <article className="tickets">
            {filteredTickets.map(ticketObj => {
                return <Ticket ticket={ticketObj} currentUser={currentUser} getAndSetTickets={getAndSetTickets} key={ticketObj.id} />
            })}
        </article>
    </div>
}