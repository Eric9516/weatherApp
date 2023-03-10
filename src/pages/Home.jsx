import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const Home = () => {
	const [search, setSearch] = useState("");
	const [values, setValues] = useState("");
	const [icon, setIcons] = useState("");

	const URL = `http://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=3eaea1096fcf29eaf3c1e7217f06cdcc`;

	const getData = async () => {
		await fetch(URL)
			.then((res) => res.json())
			.then((res) => {
				if (res.cod >= 400) {
					return setValues(false);
				} else {
					console.log(res);
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
			<Card handleSearch={handleSearch} values={values} icon={icon} />
		</>
	);
};
