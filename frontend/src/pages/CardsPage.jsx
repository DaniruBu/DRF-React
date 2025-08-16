import { useEffect, useState } from "react"
import CardsList from '../components/CardsList'
import CardForm from '../components/CardForm'
import { useFetching } from "../hooks/useFetching"
import CardsService from "../api/CardsService"
import CategoriesService from "../api/CategoriesService"
import { message, Spin } from 'antd'

function CardsPage(){
    const [cards, setCards] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [deletingCardId, setDeletingCardId] = useState(null)

    const [fetchCards, isLoadingCards] = useFetching(async () => {
        try {
            const response = await CardsService.getCardsAll()
            setCards(response.data)
        } catch (error) {
            message.error('Ошибка при загрузке карт')
            console.error('Error fetching cards:', error)
        }
    });

    const [fetchCategories, isLoadingCategories] = useFetching(async () => {
        try {
            const response = await CategoriesService.getCategories()
            setCategories(response.data)
        } catch (error) {
            message.error('Ошибка при загрузке категорий')
            console.error('Error fetching categories:', error)
        }
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
            message.success('Карта успешно создана')
        } catch (error) {
            message.error('Ошибка при создании карты')
            console.error('Error creating card:', error)
        } finally {
            setLoading(false)
        }
    };

    const deletingCard = async (card) => {
        setDeletingCardId(card.id)
        try {
            await CardsService.deleteCard(card.id)
            await new Promise(resolve => setTimeout(resolve, 500))
            setCards(cards.filter(c => c.id !== card.id))
            message.success('Карта успешно удалена')
        } catch (error) {
            message.error('Ошибка при удалении карты')
            console.error('Error deleting card:', error)
        } finally {
            setDeletingCardId(null)
        }
    }

    const isInitialLoading = isLoadingCards || isLoadingCategories

    return (
        <Spin 
            spinning={isInitialLoading} 
            size="large"
            tip="Загрузка данных..."
        >
            <div>
                <h1>Карты</h1> 
                <CardForm 
                    create={createCard} 
                    categories={categories}
                    loading={loading}
                />

                <div className="cards-list">
                    {cards?.length > 0 ? (
                        <CardsList 
                            remove={deletingCard} 
                            cards={cards} 
                            deletingCardId={deletingCardId}
                            categories={categories}
                        />
                    ) : (
                        <p>Нет доступных карт</p>
                    )}
                </div>
            </div>
        </Spin>
    )
}

export default CardsPage;