import { useState } from 'react'
import MyButton from './MyButton'
import MyInput from './MyInput'

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
            <select 
                value={card.category} 
                onChange={(e) => setCard({...card, category: e.target.value})}
                style={{
                    padding: '8px',
                    margin: '5px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                }}
            >
                <option value="">Select Category (optional)</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.title}
                    </option>
                ))}
            </select>
            <MyButton 
                type="primary" 
                disabled={loading}
                onClick={addnewcard}
            >
                {loading ? 'Adding...' : 'Add Card'}
            </MyButton>
        </form>
    );
};

export default CardForm;