import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import CategoriesService from "../api/CategoriesService";
import CategoriesList from "../components/CategoriesList";


function CategoriesPage() {
    const [categories, setCategories] = useState([])

    const [fetchCategories] = useFetching(async () => {
        const response = await CategoriesService.getCategories()
        setCategories(response.data)
    })

    useEffect(() => {
        fetchCategories()
    }, [])


    return (
        <>
            <CategoriesList categories={categories}/>
        </>
    )


}

export default CategoriesPage;