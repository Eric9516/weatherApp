import React, { useEffect, useState } from "react";
import Icons from "../components/Icons";

export const Home = () => {
	const [search, setSearch] = useState("");
	const [values, setValues] = useState("");
	const [icon, setIcons] = useState("");

	const URL = `http://api.openweathermap.org/data/2.5/weather?q=${search}&lang=ES&units=metric&appid=3eaea1096fcf29eaf3c1e7217f06cdcc`;

	const getData = async () => {
		await fetch(URL)
			.then((res) => res.json())
			.then((res) => {
				if (res.cod >= 400) {
					return setValues(false);
				} else {
					console.log(res.weather[0].main);
					setIcons(res.weather[0].main);
					setValues(res);
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getData();
	}, [search]);

	const handleSearch = (e) => {
		if (e.key === "Enter") {
			setSearch(e.target.value);
		}
	};

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
						<h3>{values.name}</h3>
						<p>{values.main.temp.toFixed(0)}&deg;</p>
						<p>
							{values.main.temp_min.toFixed(0)}&deg; |
							{values.main.temp_max.toFixed(0)}&deg;
						</p>
						<img src={Icons(icon)} alt="icono" />
					</div>
				) : (
					<h1>Ciudad no encontrada</h1>
				)}
			</div>
		</>
	);
};
