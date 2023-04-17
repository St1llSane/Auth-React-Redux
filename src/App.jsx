import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import styles from './styles/app.module.scss'

function App() {
	return (
		<div className={styles.app}>
			<div className={styles.wrapper}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
