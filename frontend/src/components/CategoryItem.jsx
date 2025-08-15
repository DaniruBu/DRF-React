import { Card } from "antd"

const CategoryItem = ({ category }) => {
    return (
        <Card 
            title={category.title}
            className="category-item"
            bodyStyle={{ height: '100%', padding: '16px' }}
        />
    )
}

export default CategoryItem