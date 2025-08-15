import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import CategoriesService from "../api/CategoriesService";
import CategoriesList from "../components/CategoriesList";
import { Spin, message } from "antd";

function CategoriesPage() {
    const [categories, setCategories] = useState([])

    const [fetchCategories, isLoading] = useFetching(async () => {
        try {
            const response = await CategoriesService.getCategories()
            setCategories(response.data)
        } catch (error) {
            message.error('Ошибка при загрузке категорий')
            console.error('Error fetching categories:', error)
        }
    })

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <Spin 
            spinning={isLoading} 
            size="large"
            tip="Загрузка категорий..."
        >
            <div style={{ minHeight: '200px' }}>
                <CategoriesList categories={categories}/>
            </div>
        </Spin>
    )
}

export default CategoriesPage;