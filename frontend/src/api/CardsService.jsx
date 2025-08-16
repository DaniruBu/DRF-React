import React from 'react'
import axios from "axios";

export default class CardsService {
    static async getAll() {
        const response = await axios.get('http://localhost:8000/api/cards/', {
            headers: {
                'Accept': 'application/json',
            }
        })
        return response
    }

    static async create(cardData) {
        const response = await axios.post('http://localhost:8000/api/cards/', cardData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response
    }

    static async delete(cardId) {
        const response = await axios.delete(`http://localhost:8000/api/cards/${cardId}/`, {
            headers: {
                'Accept': 'application/json',
            }
        })
        return response
    }

    static async update(cardId, cardData) {
        const response = await axios.put(`http://localhost:8000/api/cards/${cardId}/`, cardData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response
    }

    static async getById(cardId) {
        const response = await axios.get(`http://localhost:8000/api/cards/${cardId}/`, {
            headers: {
                'Accept': 'application/json',
            }
        })
        return response
    }
}
