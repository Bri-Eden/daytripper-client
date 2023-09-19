import { Link, useNavigate } from "react-router-dom"
import "./ProfilePage.css"

export const ProfilePage = () => {
    const navigate = useNavigate()
    return (
        <><head><style>
            @import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');
        </style></head><ul className="navbar">
                <li className="navbar__item">
                    <Link className="nav-link" to="/trips">My Trips</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/newtrip">Plan A Trip</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/packitems">My Inventory</Link>
                </li>
                {(localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>}        </ul></>
    )
}
