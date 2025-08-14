import axios from "axios";

export default class CardsService {
    static async getCardsAll() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/cards/', {
                headers: {
                    'Accept': 'application/json',
                },
            });
            return response;
        } catch (error) {
            console.error('Error fetching cards:', error);
            throw error;
        }
    }
}
