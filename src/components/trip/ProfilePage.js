import { Link, useNavigate, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../managers/ProfileManager";
import "./ProfilePage.css"

export const ProfilePage = ({ token }) => {
    const [profile, setProfile] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUserProfile(token).then((data) => setProfile(data));
    }, [token]);


    return (
        <><div className="profile"><div classname="info-profile">
            <section key={`profile--${profile.id}`} className="myprofile">
                <img src={profile.photo} alt="profile picture" className="profile-pictures" />
                <div className="full-name">{profile.full_name}</div>
                <div className="location">{profile.location}</div>
            </section>
        </div>

            <ul className="profile-container">
                <div className="profile-links">
                    <li className="trips-box">
                        <Link className="trips-link" to="/trips">My Trips</Link>
                    </li>
                    <li className="plan-box">
                        <Link className="trips-link" to="/newtrip">Plan A Trip</Link>
                    </li>
                    <li className="inventory-box">
                        <Link className="trips-link" to="/packitems">My Inventory</Link>
                    </li>
                </div>
                <div>
                    {(localStorage.getItem("lu_token") !== null) ?
                        <li className="nav-item">
                            <button className="nav-link fakeLink"
                                onClick={() => {
                                    localStorage.removeItem("lu_token")
                                    navigate('/login')
                                }}
                            >Logout</button>
                        </li>
                        :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>} </div>
            </ul ></div></>
    )
}
