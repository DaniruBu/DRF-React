import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Card, Typography, Space, message } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined, UserAddOutlined } from '@ant-design/icons'
import AuthStore from '../store/store'

const { Title, Text } = Typography

function RegisterForm() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values) => {
    setLoading(true)
    
    try {
      await AuthStore.register(values.email, values.password, values.username)
      message.success('Регистрация успешна! Проверьте email для активации аккаунта.')
      navigate('/login')
    } catch (error) {
      console.error('Registration error:', error)
      message.error('Ошибка регистрации. Проверьте данные и попробуйте снова.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card-detail-container">
      <Card>
        <Space direction="vertical" size="large">
          <Title level={2}>
            Регистрация
          </Title>
          
          <Form
            name="register"
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
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Пожалуйста, введите email!' },
                { type: 'email', message: 'Пожалуйста, введите корректный email!' }
              ]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="Введите email" 
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
                icon={<UserAddOutlined />}
                className="w-full"
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
          
          <div className="text-center">
            <Text>Уже есть аккаунт?</Text>
            <br />
            <Button type="link" onClick={() => navigate('/login')}>
              Войти
            </Button>
          </div>
        </Space>
      </Card>
    </div>
  )
}

export default RegisterForm
