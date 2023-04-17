import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../redux/slices/userSlice'

const Home = () => {
	const dispatch = useDispatch()
	const { isAuth, email } = useAuth()

	return isAuth ? (
		<div>
			<h1>{`Привет, ${email}!`}</h1>
			<button onClick={() => dispatch(removeUser())}>Выход</button>
		</div>
	) : (
		<Navigate to='/login' />
	)
}

export default Home
