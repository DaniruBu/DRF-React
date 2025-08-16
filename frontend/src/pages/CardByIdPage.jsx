import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useFetching } from '../hooks/useFetching'
import CardsService from '../api/CardsService'
import { message, Spin, Card, Tag, Typography } from 'antd'

const { Title, Text } = Typography

function CardByIdPage() {
    const { id } = useParams()
    const [card, setCard] = useState(null)

    const [fetchCard, isLoading, error] = useFetching(async () => {
        const response = await CardsService.getById(id)
        setCard(response.data)
    })

    useEffect(() => {
        if (error) message.error('Ошибка загрузки карты')
    }, [error])

    useEffect(() => {
        fetchCard()
    }, [])

    return (
        <Spin spinning={isLoading}>
            <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                {card && (
                    <Card>
                        <Title level={2}>{card.question}</Title>
                        
                        {card.answer && (
                            <div style={{ marginBottom: '20px' }}>
                                <Text strong>Ответ:</Text>
                                <div style={{ marginTop: '8px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '6px' }}>
                                    {card.answer}
                                </div>
                            </div>
                        )}
                        
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            {card.category && (
                                <Tag color="blue">{card.category.title}</Tag>
                            )}
                            <Text type="secondary">
                                Создано: {new Date(card.created_at).toLocaleDateString('ru-RU')}
                            </Text>
                        </div>
                    </Card>
                )}
            </div>
        </Spin>
    )
}

export default CardByIdPage;