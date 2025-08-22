import { Navigate, Outlet } from 'react-router-dom'
import AuthStore from '../store/store'
import { observer } from 'mobx-react-lite'

const PublicRoute = (props) => {
    if (AuthStore.isAuthInProgress) {
        return <div>Loading...</div>
    }
    if (!AuthStore.isAuth) {
        return <Outlet />
    } else {
        return <Navigate to="/" />
    }
}

export default observer(PublicRoute)
