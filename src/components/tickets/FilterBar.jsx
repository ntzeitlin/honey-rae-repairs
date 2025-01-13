/* eslint-disable react/prop-types */
export const FilterBar = ({
    setShowEmergencyOnly,
    setShowOpenTicketsOnly,
    setSearchTerm,
    currentUser,
}) => {
    return (
        <div className="filter-bar">
            {currentUser.isStaff ? (
                <>
                    <button
                        className="filter-btn btn-primary"
                        onClick={() => {
                            setShowEmergencyOnly(true);
                        }}
                    >
                        Emergency
                    </button>

                    <button
                        className="filter-btn btn-info"
                        onClick={() => {
                            setShowEmergencyOnly(false);
                        }}
                    >
                        Show All
                    </button>
                    <input
                        type="text"
                        placeholder="Search Tickets"
                        className="ticket-search"
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                </>
            ) : (
                <>
                    <button
                        className="filter-btn btn-primary"
                        onClick={() => {}}
                    >
                        Create Ticket
                    </button>
                    <button
                        className="filter-btn btn-info"
                        onClick={() => {
                            setShowOpenTicketsOnly(true);
                        }}
                    >
                        Open Tickets
                    </button>
                    <button
                        className="filter-btn btn-secondary"
                        onClick={() => {
                            setShowOpenTicketsOnly(false);
                        }}
                    >
                        All My Tickets
                    </button>
                </>
            )}
        </div>
    );
};
