import { Link } from 'react-router-dom'
import Register from '../components/Register'

const RegisterPage = () => {
	return (
		<div>
			<h1>Register</h1>
			<Register />
			<Link to='/login'>Already have an account?</Link>
		</div>
	)
}

export default RegisterPage
