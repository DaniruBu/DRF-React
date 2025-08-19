import RegisterForm from '../components/RegisterForm'
import { observer } from 'mobx-react-lite'

function RegisterPage() {
  return <RegisterForm />
}

export default observer(RegisterPage)