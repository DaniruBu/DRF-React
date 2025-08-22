import React, { useEffect, useState } from "react"
import { useFetching } from "../hooks/useFetching"
import CategoriesService from "../api/CategoriesService"
import CategoriesList from "../components/CategoriesList"
import { Spin, message } from "antd"

function CategoriesPage() {
    const [categories, setCategories] = useState([])

    const [fetchCategories, isLoading, error] = useFetching(async () => {
        const response = await CategoriesService.getAll()
        setCategories(response.data)
    })

    useEffect(() => {
        if (error) message.error('Ошибка загрузки категорий')
    }, [error])

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <Spin spinning={isLoading}>
            <div>
                <h1>Категории</h1>
                <div>
                    {categories?.length > 0 ? (
                        <CategoriesList categories={categories}/>
                    ) : (
                        <p>Нет категорий</p>
                    )}
                </div>
            </div>
        </Spin>
    )
}

export default CategoriesPage