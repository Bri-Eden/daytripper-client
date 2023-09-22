import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSingleTrip, deleteTrip } from "../../managers/TripManager.js"

export const SingleTripInfo = (props) => {
    const [trip, setTrip] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getSingleTrip(id).then(data => setTrip(data))
    }, [id])

    const handleDelete = (id) => {
        if (window.confirm("Cancel Trip? 🥺")) {
            deleteTrip(id)
                .then(() => {
                    getSingleTrip().then(data => setTrip(data))
                })
                .then(() => {
                    navigate(`/trips`);
                })
        }
    }

    return (
        <article className="trips">
            {trip ? (
                <section key={`trip--${trip.id}`} className="selected_trip">
                    <div className="trip_destination">
                        {trip.destination} from {trip.arrival} to {trip.departure}
                    </div>
                    <div className="trip_climate">{trip.climate}</div>

                    <div className="trip_photo">{trip.cover_photo}</div>

                    <div
                        className="packlist-card"
                        key={`packlist--${trip.id}`}
                        onClick={() => {
                            navigate(`/packlists/${trip.id}`);
                        }}
                    >

                        <div className="trip-name">Pack List</div>

                    </div>
                    <div
                        className="itinerary-card"
                        key={`activities--${trip.id}`}
                        onClick={() => {
                            navigate(`/activities/${trip.id}`);
                        }}
                    >

                        <div className="itinerary-button">Itinerary</div>

                    </div>
                    <button
                        className="btn btn-2 btn-sep icon-create"
                        onClick={() => {
                            navigate({ pathname: `/trips/${trip.id}/edit` });
                        }}
                    >
                        Edit Trip
                    </button>
                    <button onClick={() => handleDelete(trip.id)} className="btn btn-danger">
                        Delete This Trip
                    </button>
                </section>
            ) : (
                <div>Loading...</div>
            )}
        </article>
    )
}