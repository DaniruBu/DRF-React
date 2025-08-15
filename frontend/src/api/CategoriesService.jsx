import axios from "axios";

export default class CategoriesService {
    static async getCategories() {
        try {
            const response = await axios.get('http://localhost:8000/api/categories/', 
            {
                headers: {
                    'Accept': 'application/json',
                }
            });
            return response
        } catch (error) {
            console.error('Error fetching categories:', error)
            throw error
        }
    }

    static async createCategories(categoriesData){
        try {
            const response = await axios.post('http://localhost:8000/api/categories/', categoriesData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            return response
        } catch (error) {
            console.error('Error creating categories:', error)
            throw error
        }
    }
}