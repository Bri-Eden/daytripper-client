import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getSingleTrip, deleteTrip } from "../../managers/TripManager.js"

export const SingleTripInfo = (props) => {
    const [trip, setTrip] = useState([])
    const [filteredTrips, setFiltered] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getSingleTrip().then(data => setTrip(data))
    }, [])

    const handleDelete = (id) => {
        if (window.confirm("Cancel Trip? 🥺")) {
            deleteTrip(id)
                .then(() => {
                    getSingleTrip().then(data => setTrip(data))
                })
        }
    }

    return (
        <article className="trips">
            {
                trip.map(trip => {
                    return <section key={`trip--${trip.id}`} className="trip">
                        <div className="trip_destination">{trip.destination} from {trip.arrival} to {trip.departure}</div>
                        <div className="trip_climate">{trip.climate}</div>
                        <div className="trip_photo">{trip.cover_photo}</div>
                        <button className="btn btn-2 btn-sep icon-create"
                            onClick={() => {
                                navigate({ pathname: `/trips/${trip.id}/edit` })
                            }}
                        >Edit Trip</button>
                        <button
                            onClick={() => handleDelete(trip.id)}
                            className="btn btn-danger"
                        >
                            Delete This Trip
                        </button>

                    </section>
                })
            }
        </article>
    )
}