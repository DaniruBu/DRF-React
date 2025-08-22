import React from 'react'
import { Card } from "antd"

const CategoryItem = ({ category }) => {
    return (
        <Card 
            title={category.title}
            className="category-item"
        >
            <p><strong>ID:</strong> {category.id}</p>
        </Card>
    )
}

export default CategoryItem