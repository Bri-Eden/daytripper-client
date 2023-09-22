import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getActivities, deleteActivity } from "../../managers/ActivitiesManager"
import "./ActivitiesList.css"

export const ActivitiesList = () => {
    const [activities, setActivities] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getActivities(id).then(data => setActivities(data))
    }, [id])

    const updatedItinerary = () => {
        getActivities(id).then(data => setActivities(data))
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to remove this from your itinerary?")) {
            deleteActivity(id)
                .then(() => {
                    getActivities().then(data => setActivities(data))
                })
                .then(() => {
                    updatedItinerary();
                })
        }
    }


    return (
        <article className="itinerary">
            <div className="header">Itinerary</div>
            {activities.map((activity) => (
                <section key={`list--${activity.id}`} className="select_list">
                    <div className="">
                        {activity.title}
                    </div>
                    <div className="">
                        {activity.day} at {activity.time}
                    </div>
                    <div className="item-description">
                        {activity.description}
                    </div>
                    <div className="item-description">
                        {activity.activity_type.type}
                    </div>
                    <button
                        className="btn btn-2 btn-sep icon-create"
                        onClick={() => {
                            navigate({ pathname: `/activities/${activity.id}/edit` });
                        }}
                    >
                        Edit Trip
                    </button>
                    <button onClick={() => handleDelete(activity.id)} className="btn btn-danger">
                        Delete
                    </button>

                </section>


            ))}
            <button
                className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: `/activities/add` });
                }}
            >
                Build an Itinerary
            </button>
        </article>
    )
}