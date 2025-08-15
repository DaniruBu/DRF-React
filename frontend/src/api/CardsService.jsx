import axios from "axios";

export default class CardsService {
    static async getCardsAll() {
        const response = await axios.get('http://localhost:8000/api/cards/', {
            headers: {
                'Accept': 'application/json',
            }
        })
        return response
    }

    static async createCard(cardData) {
        const response = await axios.post('http://localhost:8000/api/cards/', cardData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response
    }

    static async deleteCard(cardId) {
        const response = await axios.delete(`http://localhost:8000/api/cards/${cardId}/`, {
            headers: {
                'Accept': 'application/json',
            }
        })
        return response
    }
}
