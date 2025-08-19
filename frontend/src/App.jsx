import React, { useEffect, useMemo } from 'react'
import '@ant-design/v5-patch-for-react-19'
import { BrowserRouter, Link } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { Layout, Menu } from 'antd'
import AuthStore from './store/store'
import { observer } from 'mobx-react-lite'

const { Header, Content, Footer } = Layout

const App = observer(() => {

  useEffect(() => {
    AuthStore.checkAuth()
  }, [])

  const menuItems = useMemo(() => [
    { key: 'home', label: <Link to="/">Главная</Link> },
    { key: 'categories', label: <Link to="/categories">Категории</Link> },
    ...(AuthStore.isAuth ? [
      { key: 'cards', label: <Link to="/cards">Карточки</Link> },
      { key: 'logout', label: <span onClick={AuthStore.logout} >Выйти</span> }
    ] : [
      { key: 'login', label: <Link to="/login">Войти</Link> },
      { key: 'register', label: <Link to="/register">Регистрация</Link> }
    ])
  ], [AuthStore.isAuth])

  return (
    <BrowserRouter>
      <Layout className="app-layout">
        <Header>
          <Menu theme="dark" mode="horizontal" items={menuItems} />
        </Header>
        <Content className="app-content">
          <AppRouter />
        </Content>
        <Footer className="app-footer">
          <p>DRF-React ©2025</p>
        </Footer>
      </Layout>
    </BrowserRouter>
  )
})

export default App
