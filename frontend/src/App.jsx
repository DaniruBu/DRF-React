import '@ant-design/v5-patch-for-react-19';
import {BrowserRouter, Link} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer} = Layout;

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" items={[
            {
              key: 'cards',
              label: <Link to="/cards">Cards</Link>
            }
          ]}/>
        </Header>
        <Content>
          <AppRouter />
        </Content>
        <Footer>
          <p>DRF-React ©2025</p>
        </Footer>
      </Layout>
    </BrowserRouter>
  )
}

export default App
