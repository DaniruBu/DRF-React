import { Space } from "antd"
import CategoryItem from "./CategoryItem"

const CategoriesList = ({ categories = [] }) => {
    return (
        <div>
            {categories?.length > 0 ? (
                <Space direction="vertical" size="middle" style={{ display: 'flex' }} >
                    {categories.map((category) => (
                        <CategoryItem key={category.id} category={category} />
                     ))}
                </Space>     
            ) : (
                <p>No Categories available</p>
            )}
        </div>
    ) 
}

export default CategoriesList;