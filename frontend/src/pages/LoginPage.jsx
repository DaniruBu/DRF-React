import LoginForm from '../components/LoginForm'
import { observer } from 'mobx-react-lite'

function LoginPage() {
  return <LoginForm />
}

export default observer(LoginPage)