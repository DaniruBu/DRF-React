import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthStore from '../store/store'
import MyInput from './MyInput'
import MyButton from './MyButton'

function RegisterForm() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await AuthStore.register(email, password, username)
      alert('Регистрация успешна! Теперь вы можете войти.')
      navigate('/login')
    } catch (error) {
      console.error('Registration error:', error)
      alert('Ошибка регистрации. Проверьте данные и попробуйте снова.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Регистрация</h2>
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
          <label>Email</label>
          <MyInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Введите email"
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
          Зарегистрироваться
        </MyButton>
      </form>
      
      <div>
        <p>Уже есть аккаунт?</p>
        <button onClick={() => navigate('/login')}>
          Войти
        </button>
      </div>
    </div>
  )
}

export default RegisterForm
