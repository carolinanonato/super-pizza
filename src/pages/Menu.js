import React from 'react'
import Card from "../components/Card";
import data from "../data"

export default function Menu() {
    const cards = data.map(item => {
        return (
            <>

                <Card
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    ingredients={item.ingredients}
                    price={item.price}

                />
            </>
        )
    })

    return (
        <div className="cards-list">{cards}</div>
    )
}
