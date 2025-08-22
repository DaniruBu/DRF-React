import React from 'react'
import CardItem from './CardItem';

const CardsList = ({ cards, remove, deletingCardId = null, categories = [] }) => {  
    return (
        <div>
            {cards?.length > 0 ? (
                <div className="cards-grid">
                    {cards.map((card) => (
                        <CardItem 
                            key={card.id} 
                            card={card} 
                            remove={remove}
                            isDeleting={deletingCardId === card.id}
                            categories={categories}
                        />
                    ))}
                </div>
            ) : (
                <p>Нет доступных карт</p>
            )}
        </div>
    )
}

export default CardsList;