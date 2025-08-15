import { Card } from 'antd'

const CardsItem = (props) => {
    return (
        <Card title={props.card.question}>
            <p>{props.card.id}</p>
            <p>{props.card.question}</p>
            <p>{props.card.category}</p>
        </Card>
    )
};

export default CardsItem;
