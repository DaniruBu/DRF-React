import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthStore from '../store/store'
import MyInput from './MyInput'
import MyButton from './MyButton'

function LoginForm() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await AuthStore.login(username, password)
      navigate('/')
    } catch (error) {
      console.error('Login error:', error)
      alert('Ошибка входа. Проверьте логин и пароль.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Вход в систему</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя пользователя</label>
          <MyInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Введите имя пользователя"
          />
        </div>
        
        <div>
          <label>Пароль</label>
          <MyInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Введите пароль"
          />
        </div>
        
        <MyButton
          type="primary"
          htmlType="submit"
          loading={loading}
        >
          Войти
        </MyButton>
      </form>
      
      <div>
        <p>Нет аккаунта?</p>
        <button onClick={() => navigate('/register')}>
          Зарегистрироваться
        </button>
      </div>
    </div>
  )
}

export default LoginForm
