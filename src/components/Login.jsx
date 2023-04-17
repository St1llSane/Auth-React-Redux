import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const loginHandler = (email, password) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user)
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				)
				navigate('/')
			})
			.catch(() => alert('Invalid data'))
	}

	return <Form title='Login' handleClick={loginHandler} />
}

export default Login
