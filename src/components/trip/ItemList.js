import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPackItems } from "../../managers/PackListManager";

export const ItemList = (props) => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getPackItems().then((data) => setItems(data));
    }, []);

    return (
        <div className="items-container">
            <h2>My Inventory</h2>
            <div className="items-list">                        <button
                className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: `/newitem` });
                }}
            >
                Add an Item
            </button>
                {items.map((item) => (
                    <section key={`list--${item.id}`} className="select_list">
                        <div className="list item">
                            {item.item_name}
                        </div>
                        <div className="item-description">
                            {item.description}
                        </div>

                    </section>

                ))}
                <button
                    className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        navigate({ pathname: `/packlist/add` });
                    }}
                >
                    Add Item To Pack List
                </button>
            </div>
        </div>
    );
};