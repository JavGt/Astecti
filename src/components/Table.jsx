import '../sass/content/table.scss';
import Tr from './Tr';

const Table = ({ registros }) => {
	return (
		<>
			<div className='container'>
				<table className='table'>
					<thead className='table__thead'>
						<tr>
							<td>ID</td>
							<td>IdCiudad</td>
							<td>Nombre</td>
							<td>Estado</td>
							<td>probabilityof precip</td>
							<td>relativehu midity</td>
							<td>Lastreportt ime forma</td>
							<td>LLUEVE</td>
						</tr>
					</thead>
					<tbody className='table__tbody'>
						{registros.map(registro => (
							<Tr key={registro._id} registro={registro} />
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Table;
