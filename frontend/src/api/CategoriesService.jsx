import React from 'react'
import { $api } from '../http'

export default class CategoriesService {
    static async getAll() {
        const response = await $api.get('categories/')
        return response
    }

    static async create(categoriesData){
        const response = await $api.post('categories/', categoriesData)
        return response
    }
    static async delete(categoryId) {
        const response = await $api.delete(`categories/${categoryId}/`)
        return response
    }

    static async update(categoryId, categoryData) {
        const response = await $api.put(`categories/${categoryId}/`, categoryData)
        return response
    }

    static async getById(categoryId) {
        const response = await $api.get(`categories/${categoryId}/`)
        return response
    }
}