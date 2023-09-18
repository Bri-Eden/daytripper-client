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


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
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
            </Route>
        </Routes>
    </>
}
