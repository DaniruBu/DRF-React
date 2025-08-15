import CardItem from './CardItem';
import { Space } from 'antd';

const CardsList = ({ cards = [] }) => {  
    return (
        <div>
            {Array.isArray(cards) && cards.length > 0 ? (
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    {cards.map((card) => (
                        <CardItem key={card.id} card={card} />
                    ))}
                </Space>
            ) : (
                <p>No cards available</p>
            )}
        </div>
    )
}

export default CardsList;