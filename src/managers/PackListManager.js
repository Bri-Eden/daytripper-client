export const getSinglePackList = (id) => {
    return fetch(`http://localhost:8000/packlists?trip=${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createPackList = () => {
    return fetch("http://localhost:8000/packlists", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify()
    })
        .then(response => response.json())
}

export const getPackItems = (id) => {
    return fetch(`http://localhost:8000/packitems?current`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createPackItem = (trip) => {
    return fetch("http://localhost:8000/packitems", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(trip)
    })
        .then(response => response.json())
}

export const getItemType = () => {
    return fetch("http://localhost:8000/itemtypes", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const updateItem = (id, packitem) => {
    return fetch(`http://localhost:8000/packitems/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(packitem),
    })
}


export const deleteItem = (id) => {
    return fetch(`http://localhost:8000/packitems/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
};