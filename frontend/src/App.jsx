import React from 'react'
import '@ant-design/v5-patch-for-react-19';
import {BrowserRouter, Link} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer} = Layout;

function App() {
  const menuItems = [
    {
      key: 'home',
      label: <Link to="/">Главная</Link>
    }, 
    {
      key: 'cards',
      label: <Link to="/cards">Карты</Link>
    },
    {
      key: 'categories',
      label: <Link to="/categories">Категории</Link>
    },
  ];

  return (
    <BrowserRouter>
      <Layout className="app-layout">
        <Header>
          <Menu 
            theme="dark" 
            mode="horizontal" 
            items={menuItems}
          />
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
}

export default App
