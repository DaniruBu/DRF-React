import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ActivationCard from '../components/ActivationCard'
import AuthService from '../api/AuthService'

const ActivatePage = () => {
  const { uid, token } = useParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const activateUser = async () => {
      try {
        const response = await AuthService.activateAccount(uid, token)
        setStatus('success')
        setMessage('Активация успешна!')
        
        setTimeout(() => {
          navigate('/login')
        }, 3000)
      } catch (error) {
        setStatus('error')
        setMessage('Ошибка активации аккаунта. Возможно, ссылка устарела или недействительна.')
      }
    }

    if (uid && token) {
      activateUser()
    }
  }, [uid, token, navigate])

  return (
    <ActivationCard
      status={status}
      title={status === 'success' ? 'Активация успешна!' : 'Ошибка активации'}
      message={message}
      onSuccessAction={() => navigate('/login')}
      onErrorAction={() => navigate('/register')}
      successButtonText="Войти в систему"
      errorButtonText="Зарегистрироваться заново"
    />
  )
}

export default ActivatePage
