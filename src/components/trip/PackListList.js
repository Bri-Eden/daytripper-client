import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSinglePackList, deleteItem, getPackItems } from "../../managers/PackListManager"

export const PackListList = (props) => {
    const [packListItem, setPackListItem] = useState({})
    const [packItems, setPackItems] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getSinglePackList(id).then(data => setPackListItem(data))
    }, [id])

    useEffect((id) => {
        getPackItems().then(data => setPackItems(data))
    }, [id])


    const handleDelete = (id) => {
        if (window.confirm("Delete item from list?")) {
            deleteItem(id)
                .then(() => {
                    getSinglePackList().then(data => setPackListItem(data))
                })
        }
    }

    return (
        <article className="packlist">
            <div className="pack-add">Pack List</div>
            {packItems.map((item) => (
                <section key={`list--${item.id}`} className="select_list">
                    <div className="list-item">
                        {item.item_name}
                    </div>
                    <div className="item-description">
                        {item.description}
                    </div>
                    <button
                        className="btn btn-2 btn-sep icon-create"
                        onClick={() => {
                            navigate({ pathname: `/packlist/add` });
                        }}
                    >
                        Create A Pack List
                    </button>
                </section>

            ))}
            <button
                className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: `/packlist/add` });
                }}
            >
                Create A Pack List
            </button>
        </article>
    )
}