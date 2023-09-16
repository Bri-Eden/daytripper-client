import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { TripList } from "../components/trip/TripsList"
import { TripForm } from "../components/trip/TripForm"
import { TripEdit } from "../components/trip/TripEdit"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/trips" element={<TripList />} />
                <Route path="/newtrip" element={<TripForm />} />
                <Route path="/trips/:id/edit" element={<TripEdit />} />

            </Route>
        </Routes>
    </>
}
