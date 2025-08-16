import axios from "axios";

export default class CategoriesService {
    static async getCategories() {
        const response = await axios.get('http://localhost:8000/api/categories/', 
        {
            headers: {
                'Accept': 'application/json',
            }
        });
        return response
    }

    static async createCategories(categoriesData){
        const response = await axios.post('http://localhost:8000/api/categories/', categoriesData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response
    }
}