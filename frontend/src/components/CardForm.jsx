import { useState } from 'react';
import MyButton from './MyButton';
import MyInput from './MyInput';

const CardForm = ({create}) => {
    const [card, setCard] = useState({ question: '', answer: ''});

    const addnewcard = (e) => {
        e.preventDefault()
        const newCard = {...card}
        create(newCard)
        setCard({ question: '', answer: ''})
    }
    return (
        <form>
            <MyInput type="text" placeholder="Question" value={card.question} onChange={(e) => setCard({...card, question: e.target.value})} />
            <MyInput type="text" placeholder="Answer" value={card.answer} onChange={(e) => setCard({...card, answer: e.target.value})} />    
            <MyButton type="primary" danger onClick={addnewcard}>Add</MyButton>
        </form>
    );
};

export default CardForm;