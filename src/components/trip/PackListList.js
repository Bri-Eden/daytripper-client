import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSinglePackList, deleteItem, getPackItems } from "../../managers/PackListManager"

export const PackListList = () => {
    const [packListItem, setPackListItem] = useState([])
    const [packItems, setPackItems] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getSinglePackList(id).then(data => setPackListItem(data))
    }, [id])

    useEffect(() => {
        getPackItems().then(data => setPackItems(data))
    }, [])

    const getPackList = (id) => {
        getSinglePackList(id).then(data => setPackListItem(data))
    }


    return (
        <article className="packlist">
            <div className="pack-add">Pack List</div>
            {packListItem.map((item) => (
                <section key={`list--${item.id}`} className="select_list">
                    <div className="list-item">
                        {item.packitem.item_name}
                    </div>
                    <div className="item-description">
                        {item.packitem.description}
                    </div>

                </section>

            ))}
        </article>
    )
}