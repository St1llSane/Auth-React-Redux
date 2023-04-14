import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import styles from './styles/app.module.scss'

function App() {
	return (
		<div className={styles.app}>
			<div className={styles.wrapper}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
