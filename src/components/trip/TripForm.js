import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createTrip, getSingleTrip, getTransportationTypes, getUserTrips } from "../../managers/TripManager"


export const TripForm = () => {
    const navigate = useNavigate()
    const [transpoTypes, setTranspoTypes] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentTrip, setCurrentTrip] = useState({
        destination: "",
        arrival: "",
        departure: "",
        num_of_days: 0,
        num_of_nights: 0,
        climate: "",
        mode_of_transport: 0,
        cover_photo: ""
    })


    useEffect(() => {
        getTransportationTypes().then(data => setTranspoTypes(data))
    }, [])

    const changeTripState = (trip) => {
        // TODO: Complete the onChange function
        const { name, value } = trip.target;
        setCurrentTrip((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form className="tripForm">
            <h2 className="tripForm__title">Plan a Trip!</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="destination">Where to? </label>
                    <input type="text" name="destination" required autoFocus className="form-control"
                        value={currentTrip.destination}
                        onChange={changeTripState} />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="arrival">Arrival: </label>
                    <input type="date" name="arrival" required autoFocus className="form-control"
                        value={currentTrip.arrival}
                        onChange={changeTripState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="departure">Departure: </label>
                    <input type="date" name="departure" required autoFocus className="form-control"
                        value={currentTrip.departure}
                        onChange={changeTripState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="num_of_days">Days: </label>
                    <input type="number" name="num_of_days" required autoFocus className="form-control"
                        value={currentTrip.num_of_days}
                        onChange={changeTripState} />
                </div>
                <div className="form-group">
                    <label htmlFor="num_of_nights">Nights: </label>
                    <input type="number" name="num_of_nights" required autoFocus className="form-control"
                        value={currentTrip.num_of_nights}
                        onChange={changeTripState} />
                </div>

            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="mode_of_transport">How are you getting there? </label>
                    <select name="mode_of_transport" required autoFocus className="form-control"
                        value={currentTrip.mode_of_transport}
                        onChange={changeTripState}
                    >
                        <option value="">Planes, Trains, and Automobiles!</option>
                        {transpoTypes.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.type}
                            </option>
                        ))
                        }
                    </select >
                </div >
            </fieldset >

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const trip = {
                        destination: currentTrip.destination,
                        arrival: currentTrip.arrival,
                        departure: currentTrip.departure,
                        num_of_days: parseInt(currentTrip.num_of_days),
                        num_of_nights: parseInt(currentTrip.num_of_nights),
                        climate: currentTrip.climate,
                        mode_of_transport: parseInt(currentTrip.mode_of_transport),
                        cover_photo: currentTrip.cover_photo
                    }

                    // Send POST request to your API
                    createTrip(trip)
                        .then(() => navigate("/trips"))
                }}
                className="btn btn-primary">Start Planning!</button>
        </form>
    )
}