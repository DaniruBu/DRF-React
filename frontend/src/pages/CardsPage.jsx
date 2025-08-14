import { useEffect, useState } from "react";
import { Space } from 'antd';
import CardsList from '../components/CardsList';
import CardForm from '../components/CardForm';
import { useFetching } from "../hooks/useFetching";
import CardsService from "../api/CardsService";


function CardsPage(){
    const [cards, setCards] = useState([]);

    const [fetchCards, isLoading] = useFetching(async () => {
        const response = await CardsService.getCardsAll();
        setCards(response.data);
    });


    useEffect(() => {
        fetchCards();
    },)


    const createCard = (newCard) => {
        setCards([...cards, newCard]);
    }

    return (
        <>
            <CardForm create={createCard} />
            <CardsList cards={cards} />
        </>
    )

}

export default CardsPage;