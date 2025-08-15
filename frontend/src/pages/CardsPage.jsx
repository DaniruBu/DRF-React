import { useEffect, useState } from "react"
import CardsList from '../components/CardsList'
import CardForm from '../components/CardForm'
import { useFetching } from "../hooks/useFetching"
import CardsService from "../api/CardsService"
import CategoriesService from "../api/CategoriesService"


function CardsPage(){
    const [cards, setCards] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    const [fetchCards, isLoading] = useFetching(async () => {
        const response = await CardsService.getCardsAll()
        setCards(response.data)
    });

    const [fetchCategories] = useFetching(async () => {
        const response = await CategoriesService.getCategories()
        setCategories(response.data)
    });

    useEffect(() => {
        fetchCards()
        fetchCategories()
    }, []);

    const createCard = async (cardData) => {
        setLoading(true)
        try {
            const response = await CardsService.createCard(cardData)
            setCards([...cards, response.data])
        } catch (error) {
            console.error('Error creating card:', error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <CardForm 
                create={createCard} 
                categories={categories}
                loading={loading}
            />
            <CardsList cards={cards} />
        </>
    )
}

export default CardsPage;