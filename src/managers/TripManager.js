export const getUserTrips = () => {
    return fetch("http://localhost:8000/trips?current", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleTrip = (id) => {
    return fetch(`http://localhost:8000/trips/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createTrip = (trip) => {
    return fetch("http://localhost:8000/trips", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(trip)
    })
        .then(response => response.json())
}

export const getTransportationTypes = () => {
    return fetch("http://localhost:8000/transportation", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const updateTrip = (id, trip) => {
    return fetch(`http://localhost:8000/trips/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trip),
    })
}


export const deleteTrip = (id) => {
    return fetch(`http://localhost:8000/trips/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
};