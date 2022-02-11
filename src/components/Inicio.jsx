import { useState, useEffect } from 'react';
import Table from './Table';


const Inicio = () => {
	const [registros, setRegistros] = useState([]);

	useEffect(() => {
		const llamadaApi = async () => {
			const limit = 10;
			try {
				const url = `https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=${limit}`;
				const resultado = await fetch(url);
				const respuesta = await resultado.json();

				setRegistros(respuesta.results);
			} catch (error) {
				console.log(error);
			}
		};

		llamadaApi();
	}, []);

	return (
		<>
			<h1 className='heading'>Tabla de registros</h1>
			<Table registros={registros} />
		</>
	);
};

export default Inicio;
