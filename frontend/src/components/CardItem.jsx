import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import MyButton from './MyButton';
import { LoadingOutlined } from '@ant-design/icons'

const CardsItem = ({ card, remove, isDeleting = false, categories = [] }) => {
    const getCategoryName = (categoryId) => {
        if (!categoryId) return 'Без категории';
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.title : 'Неизвестная категория';
    };

    return (
        <Card 
            title={`Карта #${card.id}`}
            className="card-item"
        >
            <div className="card-content">
                <div className="card-text">
                    <p><strong>Вопрос:</strong> {card.question}</p>
                    <p><strong>Категория:</strong> {getCategoryName(card.category)}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/cards/${card.id}`}>
                        <MyButton 
                            type="primary"
                            size="small"
                        >
                            Подробнее
                        </MyButton>
                    </Link>
                    <MyButton 
                        danger 
                        onClick={() => remove(card)}
                        disabled={isDeleting}
                        icon={isDeleting ? <LoadingOutlined /> : null}
                        size="small"
                    >
                        {isDeleting ? 'Удаление...' : 'Удалить'}
                    </MyButton>
                </div>
            </div>
        </Card>
    )
};

export default CardsItem;
