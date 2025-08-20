import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Card, Typography, Space, message } from 'antd'
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons'
import AuthStore from '../store/store'

const { Title, Text } = Typography

function LoginForm() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values) => {
    setLoading(true)
    
    try {
      await AuthStore.login(values.username, values.password)
      message.success('Вход выполнен успешно!')
      navigate('/')
    } catch (error) {
      console.error('Login error:', error)
      message.error('Ошибка входа. Проверьте логин и пароль.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card-detail-container">
      <Card>
        <Space direction="vertical" size="large">
          <Title level={2}>
            Вход в систему
          </Title>
          
          <Form
            name="login"
            onFinish={handleSubmit}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="username"
              label="Имя пользователя"
              rules={[{ required: true, message: 'Пожалуйста, введите имя пользователя!' }]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="Введите имя пользователя" 
              />
            </Form.Item>
            
            <Form.Item
              name="password"
              label="Пароль"
              rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
            >
              <Input.Password 
                prefix={<LockOutlined />} 
                placeholder="Введите пароль" 
              />
            </Form.Item>
            
            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                loading={loading}
                icon={<LoginOutlined />}
                className="w-full"
              >
                Войти
              </Button>
            </Form.Item>
          </Form>
          
          <div className="text-center">
            <Text>Нет аккаунта?</Text>
            <br />
            <Button type="link" onClick={() => navigate('/register')}>
              Зарегистрироваться
            </Button>
          </div>
        </Space>
      </Card>
    </div>
  )
}

export default LoginForm
