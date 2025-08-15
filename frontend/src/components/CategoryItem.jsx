import { Card } from "antd"
const CategoryItem = (props) => {
    return (
        <Card title={props.category.title}/>
    )
}
export default CategoryItem