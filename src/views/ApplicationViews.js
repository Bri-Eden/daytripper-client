import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { TripList } from "../components/trip/TripsList"
import { TripForm } from "../components/trip/TripForm"
import { TripEdit } from "../components/trip/TripEdit"
import { SingleTripInfo } from "../components/trip/SingleTripPage"
import { PackListList } from "../components/trip/PackListList"
import { ItemList } from "../components/trip/ItemList"
import { ItemForm } from "../components/trip/ItemForm"
import { PackListForm } from "../components/trip/PackListForm"
import { ProfilePage } from "../components/trip/ProfilePage"
import { ActivitiesList } from "../components/trip/ActivitiesList"
import { ActivitiesForm } from "../components/trip/ActivitiesForm"

export const ApplicationViews = ({ token, setToken }) => {
    return <>
        <Routes>
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/trips" element={<TripList />} />
                <Route path="/newtrip" element={<TripForm />} />
                <Route path="/trips/:id/edit" element={<TripEdit />} />
                <Route path="/trips/:id" element={<SingleTripInfo />} />
                <Route path="/packlists/:id" element={<PackListList />} />
                <Route path="/packitems" element={<ItemList />} />
                <Route path="/newitem" element={<ItemForm />} />
                <Route path="/packlist/add" element={<PackListForm />} />
                <Route path="/activities/:id" element={<ActivitiesList />} />
                <Route path="/planner" element={<ProfilePage token={token} />} />
            </Route>
        </Routes>
    </>
}
