import Icons from "../components/Icons";

export const Card = ({ values, icon, handleSearch }) => {
	return (
		<>
			<div>
				<h1>Weather App</h1>
				<div>
					<input
						placeholder="Buscar ciudad"
						onKeyDown={handleSearch}
						autoFocus
					/>
				</div>
			</div>

			<div>
				{values ? (
					<div>
						<h3>
							{values.name},&nbsp;{values.sys.country}
						</h3>
						<h3>{values.main.temp.toFixed(0)}&deg;</h3>
						<img src={Icons(icon)} alt="icono" style={{ width: "300px" }} />
					</div>
				) : (
					<h1>Ciudad no encontrada</h1>
				)}
			</div>
		</>
	);
};
