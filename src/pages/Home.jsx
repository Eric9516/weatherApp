import { Container } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { Card } from "../components/Card";
import { WeatherContext } from "../context/weatherContext";

export const Home = () => {
	const [search, setSearch] = useState("");
	const [values, setValues] = useState("");
	const [icon, setIcons] = useState("");

	const context = useContext(WeatherContext);
	const URL = `http://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=3eaea1096fcf29eaf3c1e7217f06cdcc`;

	const getData = async () => {
		await fetch(URL)
			.then((res) => res.json())
			.then((res) => {
				if (res.cod >= 400) {
					return setValues(false);
				} else {
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
		setSearch(context.city);
	};

	return (
		<Container maxWidth="xs">
			<Card handleSearch={handleSearch} values={values} icon={icon} />
		</Container>
	);
};
