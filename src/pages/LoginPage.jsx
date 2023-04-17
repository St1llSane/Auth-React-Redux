import { Link } from 'react-router-dom'
import Login from '../components/Login'

const LoginPage = () => {
	return (
		<div>
			<h1>Login</h1>
			<Login />
			<Link to='/register'>Register</Link>
		</div>
	)
}

export default LoginPage
