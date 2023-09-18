import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { getPackItems, createPackList } from "../../managers/PackListManager"
import { getUserTrips } from "../../managers/TripManager"


export const PackListForm = () => {
    const navigate = useNavigate()
    const [trip, setTrip] = useState([])
    const [packItem, setPackItem] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentPackList, setPackList] = useState({
        packitem: 0,
        trip: 0
    })


    useEffect(() => {
        getUserTrips().then(data => setTrip(data))
    }, [])

    useEffect(() => {
        getPackItems().then(data => setPackItem(data))
    }, [])

    const changePackList = (item) => {
        // TODO: Complete the onChange function
        const { name, value } = item.target;
        setPackList((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form className="itemForm">
            <h2 className="itemForm__title">Choose an Item to Add</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="packitem">Item: </label>
                    <select name="packitem" required autoFocus className="form-control"
                        value={currentPackList.packitem}
                        onChange={changePackList}
                    >
                        <option value="">Get to Packing!</option>
                        {packItem.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.item_name}
                            </option>
                        ))
                        }
                    </select >
                </div >
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="trip">Trip: </label>
                    <select name="trip" required autoFocus className="form-control"
                        value={currentPackList.destination}
                        onChange={changePackList}
                    >
                        <option value="">Which trip?</option>
                        {trip.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.destination}
                            </option>
                        ))
                        }
                    </select >
                </div >
            </fieldset >

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const packlist = {
                        packitem: parseInt(currentPackList.packitem),
                        trip: parseInt(currentPackList.trip)
                    }

                    // Send POST request to your API
                    createPackList(packlist)
                        .then(() => navigate(`/packlists/${packlist.trip}`))
                }}
                className="btn btn-primary">Add Item to PackList</button>
        </form>
    )
}