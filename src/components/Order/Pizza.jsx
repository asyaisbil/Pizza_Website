
import React from "react";

export default function Pizza({ order }) {
    const { pizzaName, price, rating, review, info } = order
    return (
        <div className="info">
            <h3>
                {pizzaName}
            </h3>
            <div className="price">
                <h2>{price}</h2>
                <p>{rating}</p>
                <p>{review}</p>
            </div>
            <p>
                {info}
            </p>
        </div>
    )
}