import { Link } from 'react-router-dom';

const Tr = ({ registro }) => {
	const {
		_id,
		cityid,
		name,
		state,
		probabilityofprecip,
		relativehumidity,
		lastreporttime,
	} = registro;

	const formatoFecha = () => {
		const date = new Date();

		// console.log(date);
	};

	const llueve = () =>
		probabilityofprecip > 60 || relativehumidity > 50 ? 'LLueve' : 'No llueve';

	return (
		<>
			<tr>
				<td>
					<Link to={`/${_id}`}>{_id}</Link>
				</td>
				<td>{cityid}</td>
				<td>{name}</td>
				<td>{state}</td>
				<td>{probabilityofprecip}</td>
				<td>{relativehumidity}</td>
				<td>{lastreporttime}</td>
				<td>{llueve()}</td>
			</tr>
		</>
	);
};

export default Tr;
