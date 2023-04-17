import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'

const Register = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const registerHandler = (email, password) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
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

	return <Form title='Register' handleClick={registerHandler} />
}

export default Register
