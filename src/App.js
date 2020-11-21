import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Route path="/dialogs">
						<DialogsContainer />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
				</div>
				<footer></footer>
			</div>
		</BrowserRouter>
	)
}

export default App
