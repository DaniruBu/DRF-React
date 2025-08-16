import React, { useEffect, useState } from "react"
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

    const [fetchCards, isLoadingCards, errorCards] = useFetching(async () => {
        const response = await CardsService.getAll()
        setCards(response.data)
    });

    const [fetchCategories, isLoadingCategories, errorCategories] = useFetching(async () => {
        const response = await CategoriesService.getAll()
        setCategories(response.data)
    });

    useEffect(() => {
        if (errorCards) message.error('Ошибка загрузки карт')
        if (errorCategories) message.error('Ошибка загрузки категорий')
    }, [errorCards, errorCategories])

    useEffect(() => {
        fetchCards()
        fetchCategories()
    }, []);

    const createCard = async (cardData) => {
        setLoading(true)
        try {
            const response = await CardsService.create(cardData)
            setCards([...cards, response.data])
            message.success('Карта создана')
        } catch (error) {
            message.error('Ошибка создания карты')
        } finally {
            setLoading(false)
        }
    };

    const deletingCard = async (card) => {
        setDeletingCardId(card.id)
        try {
            await CardsService.delete(card.id)
            setCards(cards.filter(c => c.id !== card.id))
            message.success('Карта удалена')
        } catch (error) {
            message.error('Ошибка удаления карты')
        } finally {
            setDeletingCardId(null)
        }
    }

    return (
        <Spin spinning={isLoadingCards || isLoadingCategories}>
            <div>
                <h1>Карты</h1> 
                <CardForm create={createCard} categories={categories} loading={loading} />
                <div className="cards-list">
                    {cards?.length > 0 ? (
                        <CardsList 
                            remove={deletingCard} 
                            cards={cards} 
                            deletingCardId={deletingCardId}
                            categories={categories}
                        />
                    ) : (
                        <p>Нет карт</p>
                    )}
                </div>
            </div>
        </Spin>
    )
}

export default CardsPage;