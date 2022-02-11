import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Modal = () => {
	const { id } = useParams();

	const [registro, setRegistro] = useState([]);

	useEffect(() => {
		const llamadaApi = async () => {
			const idUrl = id;
			try {
				const url = `https://api.datos.gob.mx/v1/condiciones-atmosfericas?_id=${idUrl}`;
				const resultado = await fetch(url);
				const respuesta = await resultado.json();

				console.log(respuesta.results);
				setRegistro(respuesta.results);
			} catch (error) {
				console.log(error);
			}
		};

		llamadaApi();
	}, []);

	const [{_id, cityid, state, probabilityofprecip, relativehumidity }]= registro;
    console.log(_id)

	const llueve = () =>
		probabilityofprecip > 60 || relativehumidity > 50 ? 'LLueve' : 'No llueve';

	return (
		<>
			<div className='container'>
				<h1 className='heading'> registro</h1>

				<div className='conteni'>
					<p className='campo'>Id: {_id}</p>
					<p className='campo'>IdCiudad: {cityid}</p>
					<p className='campo'>Estado: {state}</p>
					<p className='campo'>probabilityofprecip {probabilityofprecip}</p>
					<p className='campo'>relativehumidity {relativehumidity}</p>
					<p className='campo'>LLueve: {llueve()}</p>
				</div>
			</div>
		</>
	);
};

export default Modal;
