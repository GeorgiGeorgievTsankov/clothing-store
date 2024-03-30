import React from 'react'
import './CategoryComponent.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'


export const CategoryComponent = ({ category }) => {
    const { imageUrl, title, route } = category;

    return (
        <div className="category-container">
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}>
                <Link to={route}>
                    <div className="category-body-container">
                        <h2>{title}</h2>
                        <p>Shop now</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
