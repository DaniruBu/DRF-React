import React from 'react'
import axios from "axios";

export default class CategoriesService {
    static async getAll() {
        const response = await axios.get('http://localhost:8000/api/categories/', 
        {
            headers: {
                'Accept': 'application/json',
            }
        });
        return response
    }

    static async create(categoriesData){
        const response = await axios.post('http://localhost:8000/api/categories/', categoriesData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response
    }
    static async delete(categoryId) {
        const response = await axios.delete(`http://localhost:8000/api/categories/${categoryId}/`, {
            headers: {
                'Accept': 'application/json',
            }
        })
        return response
    }

    static async update(categoryId, categoryData) {
        const response = await axios.put(`http://localhost:8000/api/categories/${categoryId}/`, categoryData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response
    }

    static async getById(categoryId) {
        const response = await axios.get(`http://localhost:8000/api/categories/${categoryId}/`, {
            headers: {
                'Accept': 'application/json',
            }
        })
        return response
    }
}