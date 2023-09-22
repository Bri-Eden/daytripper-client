export const getActivities = (id) => {
    return fetch(`http://localhost:8000/activities?trip=${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createActivity = (activity) => {
    return fetch("http://localhost:8000/activities", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(activity)
    })
        .then(response => response.json())
}

export const getActivityTypes = () => {
    return fetch("http://localhost:8000/activitytypes", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getTripDestination = (id) => {
    return fetch(`http://localhost:8000/trips?current`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const updateActivity = (id, activity) => {
    return fetch(`http://localhost:8000/activities/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(activity),
    })
}


export const deleteActivity = (id) => {
    return fetch(`http://localhost:8000/activities/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
};