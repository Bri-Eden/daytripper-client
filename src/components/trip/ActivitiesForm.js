import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { getActivityTypes, getTripDestination, createActivity } from "../../managers/ActivitiesManager"
import { type } from "@testing-library/user-event/dist/type"
import "./ActivitiesForm.css"


export const ActivitiesForm = () => {
    const navigate = useNavigate()
    const [types, setTypes] = useState([])
    const [trip, setTrips] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentActivity, setCurrentActivity] = useState({
        title: "",
        day: "",
        time: "",
        description: "",
        trip: 0,
        activity_type: 0
    })


    useEffect(() => {
        getActivityTypes().then(data => setTypes(data))
    }, [])

    useEffect(() => {
        getTripDestination().then(data => setTrips(data))
    }, [])

    const changeActivity = (activity) => {
        // TODO: Complete the onChange function
        const { name, value } = activity.target;
        setCurrentActivity((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form className="itemForm">
            <h2 className="itemForm__title">Add an Activity to your Itinerary</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentActivity.title}
                        onChange={changeActivity} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="day">Date: </label>
                    <input type="date" name="day" required autoFocus className="form-control"
                        value={currentActivity.day}
                        onChange={changeActivity} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" name="time" required autoFocus className="form-control"
                        value={currentActivity.time}
                        onChange={changeActivity} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Notes: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentActivity.description}
                        onChange={changeActivity} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="trip">Trip: </label>
                    <select name="trip" required autoFocus className="form-control"
                        value={currentActivity.trip}
                        onChange={changeActivity}
                    >
                        <option value="">Select</option>
                        {trip.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.destination}
                            </option>
                        ))
                        }
                    </select >
                </div >
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="activity_type">Category: </label>
                    <select name="activity_type" required autoFocus className="form-control"
                        value={currentActivity.activity_type}
                        onChange={changeActivity}
                    >
                        <option value="">Select</option>
                        {types.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.type}
                            </option>
                        ))
                        }
                    </select >
                </div >
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const activity = {
                        title: currentActivity.title,
                        day: currentActivity.day,
                        time: currentActivity.time,
                        description: currentActivity.description,
                        activity_type: parseInt(currentActivity.activity_type),
                        trip: parseInt(currentActivity.trip)
                    }

                    // Send POST request to your API
                    createActivity(activity)
                        .then(() => navigate(`/activities/${activity.trip}`))
                }}
                className="btn btn-primary">Add</button>
        </form>
    )
}