import { useState } from 'react'
import MyButton from './MyButton'
import MyInput from './MyInput'
import { LoadingOutlined } from '@ant-design/icons'
import { Select } from 'antd'

const { TextArea } = MyInput;

const CardForm = ({ create, categories = [], loading = false }) => {
    const [card, setCard] = useState({ question: '', answer: '', category: '' })

    const addnewcard = (e) => {
        e.preventDefault()
        
        const cardData = {
            question: card.question.trim(),
            answer: card.answer.trim(),
            category: card.category || null
        };
        
        create(cardData)
        setCard({ question: '', answer: '', category: '' })
    };

    return (
        <div className="card-form">
            <h2>Создать новую карту</h2>
            <form onSubmit={addnewcard}>
                <div>
                    <label>Вопрос *</label>
                    <TextArea
                        placeholder="Введите вопрос..."
                        value={card.question} 
                        onChange={(e) => setCard({...card, question: e.target.value})} 
                        required
                        rows={3}
                    />
                </div>
                
                <div>
                    <label>Ответ (необязательно)</label>
                    <TextArea
                        placeholder="Введите ответ..."
                        value={card.answer} 
                        onChange={(e) => setCard({...card, answer: e.target.value})} 
                        rows={4}
                    />
                </div>
                
                <div>
                    <label>Категория</label>
                    <Select
                        placeholder="Выберите категорию (необязательно)"
                        value={card.category || undefined}
                        onChange={(value) => setCard({...card, category: value})}
                        allowClear
                    >
                        {categories.map(category => (
                            <Select.Option key={category.id} value={category.id}>
                                {category.title}
                            </Select.Option>
                        ))}
                    </Select>
                </div>
                
                <MyButton 
                    type="primary" 
                    disabled={loading || !card.question.trim()}
                    onClick={addnewcard}
                    icon={loading ? <LoadingOutlined /> : null}
                >
                    {loading ? 'Создание...' : 'Создать карту'}
                </MyButton>
            </form>
        </div>
    );
};

export default CardForm;