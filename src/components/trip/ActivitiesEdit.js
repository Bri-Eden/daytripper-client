import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getActivityTypes, getTripDestination, updateActivity } from "../../managers/ActivitiesManager"
import "./ActivitiesEdit.css"

export const ActivityEdit = () => {
    const navigate = useNavigate()
    const [trip, setTrip] = useState([])
    const [type, setType] = useState([])
    const { id } = useParams();

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentActivity, setCurrentActivity] = useState({})

    useEffect(() => {
        getActivityTypes().then(data => setType(data))
        // TODO: Get the Trip types, then set the state
    }, [])

    useEffect(() => {
        getTripDestination(id).then(data => setTrip(data))
    }, [id])

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
            <h2 className="itemForm__title">Change Your Plans</h2>
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
                        {type.map((item) => (
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
                    updateActivity(id, activity)
                        .then(() => navigate(`/activities/${activity.trip}`))
                }}
                className="btn btn-primary">Save Edits</button>
        </form>
    )
}