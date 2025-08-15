import CategoryItem from "./CategoryItem"

const CategoriesList = ({ categories = [] }) => {
    return (
        <div>
            {categories?.length > 0 ? (
                <div className="categories-list">
                    {categories.map((category) => (
                        <CategoryItem key={category.id} category={category} />
                     ))}
                </div>     
            ) : (
                <p>No Categories available</p>
            )}
        </div>
    ) 
}

export default CategoriesList;