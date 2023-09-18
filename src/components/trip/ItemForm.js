import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createPackItem, getItemType } from "../../managers/PackListManager"


export const ItemForm = () => {
    const navigate = useNavigate()
    const [itemtype, setItemType] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentItem, setCurrentItem] = useState({
        item_type: 0,
        item_name: "",
        amount: 0,
        description: ""
    })


    useEffect(() => {
        getItemType().then(data => setItemType(data))
    }, [])

    const changeItemState = (item) => {
        // TODO: Complete the onChange function
        const { name, value } = item.target;
        setCurrentItem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form className="itemForm">
            <h2 className="itemForm__title">Add to my Inventory</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="item_name">Item: </label>
                    <input type="text" name="item_name" required autoFocus className="form-control"
                        value={currentItem.item_name}
                        onChange={changeItemState} />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentItem.description}
                        onChange={changeItemState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="amount">Amount: </label>
                    <input type="number" name="amount" required autoFocus className="form-control"
                        value={currentItem.amount}
                        onChange={changeItemState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="item_type">Category: </label>
                    <select name="item_type" required autoFocus className="form-control"
                        value={currentItem.item_type}
                        onChange={changeItemState}
                    >
                        <option value="">Select</option>
                        {itemtype.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.type}
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

                    const item = {
                        item_name: currentItem.item_name,
                        description: currentItem.description,
                        amount: parseInt(currentItem.amount),
                        item_type: parseInt(currentItem.item_type)
                    }

                    // Send POST request to your API
                    createPackItem(item)
                        .then(() => navigate("/packitems"))
                }}
                className="btn btn-primary">Add Item to Inventory</button>
        </form>
    )
}