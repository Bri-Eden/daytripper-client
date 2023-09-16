import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserTrips, deleteTrip } from "../../managers/TripManager.js"

export const TripList = (props) => {
    const [trips, setTrips] = useState([])
    const [filteredTrips, setFiltered] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUserTrips().then(data => setTrips(data))
    }, [])

    const handleDelete = (id) => {
        if (window.confirm("Cancel Trip? 🥺")) {
            deleteTrip(id)
                .then(() => {
                    getUserTrips().then(data => setTrips(data))
                })
        }
    }

    return (
        <article className="trips">
            {
                trips.map(trip => {
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