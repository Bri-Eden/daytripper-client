import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { createTrip, getTransportationTypes, getSingleTrip, updateTrip } from '../../managers/TripManager.js'


export const TripEdit = () => {
    const navigate = useNavigate()
    const [transpoTypes, setTranspoTypes] = useState([])
    const { id } = useParams();

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentSingleTrip, setSingleTrip] = useState({})

    useEffect(() => {
        getTransportationTypes().then(data => setTranspoTypes(data))
        // TODO: Get the Trip types, then set the state
    }, [])

    useEffect(() => {
        getSingleTrip(id).then(data => setSingleTrip(data))
    }, [id])

    const changeTripState = (Trip) => {
        // TODO: Complete the onChange function
        const { name, value } = Trip.target;
        setSingleTrip((prevState) => ({
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
                        value={currentSingleTrip.destination}
                        onChange={changeTripState} />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="arrival">Arrival: </label>
                    <input type="date" name="arrival" required autoFocus className="form-control"
                        value={currentSingleTrip.arrival}
                        onChange={changeTripState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="departure">Departure: </label>
                    <input type="date" name="departure" required autoFocus className="form-control"
                        value={currentSingleTrip.departure}
                        onChange={changeTripState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="num_of_days">Days: </label>
                    <input type="number" name="num_of_days" required autoFocus className="form-control"
                        value={currentSingleTrip.num_of_days}
                        onChange={changeTripState} />
                </div>
                <div className="form-group">
                    <label htmlFor="num_of_nights">Nights: </label>
                    <input type="number" name="num_of_nights" required autoFocus className="form-control"
                        value={currentSingleTrip.num_of_nights}
                        onChange={changeTripState} />
                </div>

            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="mode_of_transport">How are you getting there? </label>
                    <select name="mode_of_transport" required autoFocus className="form-control"
                        value={currentSingleTrip.mode_of_transport}
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
                        destination: currentSingleTrip.destination,
                        arrival: currentSingleTrip.arrival,
                        departure: currentSingleTrip.departure,
                        num_of_days: parseInt(currentSingleTrip.num_of_days),
                        num_of_nights: parseInt(currentSingleTrip.num_of_nights),
                        climate: currentSingleTrip.climate,
                        mode_of_transport: parseInt(currentSingleTrip.mode_of_transport),
                        cover_photo: currentSingleTrip.cover_photo
                    }

                    // Send POST request to your API
                    updateTrip(id, trip)
                        .then(() => navigate("/trips"))
                }}
                className="btn btn-primary">Save Edits</button>
        </form>
    )
}