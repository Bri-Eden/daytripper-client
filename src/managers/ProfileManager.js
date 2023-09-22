export const getUserProfile = (token) => {
    return fetch(`http://localhost:8000/planner?token=${token}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}