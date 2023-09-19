import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserTrips, deleteTrip } from "../../managers/TripManager.js";
import "./TripsList.css"

export const TripList = (props) => {
    const [trips, setTrips] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUserTrips().then((data) => setTrips(data));
    }, []);

    return (
        <><head><style>
            @import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');
        </style></head><div className="trips-container">
                <h2>My Trips</h2>
                <div className="trips-list">
                    {trips.map((trip) => (
                        <div
                            className="trips-card"
                            key={`trip--${trip.id}`}
                            onClick={() => {
                                navigate(`/trips/${trip.id}`);
                            }}
                        >
                            <div className="trip-name">{trip.destination}</div>
                        </div>
                    ))}
                </div>
            </div></>

    );
};
