import { useState } from 'react'
import MyButton from './MyButton'
import MyInput from './MyInput'
import { LoadingOutlined } from '@ant-design/icons'
import { Select } from 'antd'

const CardForm = ({ create, categories = [], loading = false }) => {
    const [card, setCard] = useState({ question: '', answer: '', category: '' })

    const addnewcard = (e) => {
        e.preventDefault()
        
        const cardData = {
            question: card.question,
            answer: card.answer,
            category: card.category || null
        };
        
        create(cardData)
        setCard({ question: '', answer: '', category: '' })
    };

    return (
        <form onSubmit={addnewcard}>
            <MyInput 
                type="text" 
                placeholder="Question" 
                value={card.question} 
                onChange={(e) => setCard({...card, question: e.target.value})} 
                required
            />
            <MyInput 
                type="text" 
                placeholder="Answer" 
                value={card.answer} 
                onChange={(e) => setCard({...card, answer: e.target.value})} 
            />
            <Select
                placeholder="Select Category (optional)"
                value={card.category || undefined}
                onChange={(value) => setCard({...card, category: value})}
                className="category-select"
                allowClear
            >
                {categories.map(category => (
                    <Select.Option key={category.id} value={category.id}>
                        {category.title}
                    </Select.Option>
                ))}
            </Select>
            <MyButton 
                type="primary" 
                disabled={loading}
                onClick={addnewcard}
                icon={loading ? <LoadingOutlined /> : null}
            >
                {loading ? 'Создание...' : 'Добавить карту'}
            </MyButton>
        </form>
    );
};

export default CardForm;