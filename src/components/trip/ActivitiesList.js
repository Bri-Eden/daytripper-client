import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getActivities } from "../../managers/ActivitiesManager"

export const ActivitiesList = () => {
    const [activities, setActivities] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getActivities(id).then(data => setActivities(data))
    }, [id])


    return (
        <article className="itinerary">
            <div className="header">Itinerary</div>
            {activities.map((activity) => (
                <section key={`list--${activity.id}`} className="select_list">
                    <div className="">
                        {activity.title}
                    </div>
                    <div className="item-description">
                        {activity.day} at {activity.time}
                    </div>
                    <div className="item-description">
                        {activity.description}
                    </div>
                    <div className="item-description">
                        {activity.activity_type.type}
                    </div>
                    {/*                     <button onClick={() => handleDelete(item.id)} className="btn btn-danger">
                        Remove Item from List
                    </button> */}
                </section>

            ))}
        </article>
    )
}