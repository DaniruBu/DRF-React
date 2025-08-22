import React from 'react'
import { $api } from '../http'

export default class CardsService {
    static async getAll() {
        const response = await $api.get('cards/')
        return response
    }

    static async create(cardData) {
        const response = await $api.post('cards/', cardData)
        return response
    }

    static async delete(cardId) {
        const response = await $api.delete(`cards/${cardId}/`)
        return response
    }

    static async update(cardId, cardData) {
        const response = await $api.put(`cards/${cardId}/`, cardData)
        return response
    }

    static async getById(cardId) {
        const response = await $api.get(`cards/${cardId}/`)
        return response
    }
}
