import { ApplicationViews } from "./views/ApplicationViews"
import { useState } from "react"
import { NavBar } from "./components/nav/NavBar"



export const DayTripper = () => {
    const [token, setTokenState] = useState(localStorage.getItem('lu_token'))

    const setToken = (newToken) => {
        localStorage.setItem('lu_token', newToken)
        setTokenState(newToken)
    }

    return (
        <>
            <NavBar />
            <ApplicationViews token={token} setToken={setToken} />
        </>)
}

