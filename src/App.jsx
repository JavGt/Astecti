import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Inicio from './components/Inicio';
import Modal from './components/Modal';


const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Inicio />} />

					<Route path='/:id' element={<Modal />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
