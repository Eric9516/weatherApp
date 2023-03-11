import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../context/weatherContext";
import { Box, TextField, Typography, Button } from "@mui/material";
import Icons from "../components/Icons";

export const Card = ({ values, icon, handleSearch }) => {
	const [ciudad, setCiudad] = useState("");
	const context = useContext(WeatherContext);

	useEffect(() => {
		context.searchCity(ciudad);
	}, [ciudad]);

	return (
		<Box sx={{ display: "grid", gap: 2 }}>
			<Box sx={{ display: "grid", gap: 2 }}>
				<Typography variant="h3" component="h1" align="center" gutterBottom>
					Weather App
				</Typography>
				<TextField
					label="Buscar ciudad"
					value={ciudad}
					onChange={(e) => setCiudad(e.target.value)}
					size="small"
					variant="outlined"
				/>
				<Button variant="contained" onClick={handleSearch}>
					Buscar
				</Button>
			</Box>
			{values ? (
				<Box sx={{ display: "grid", gap: 2 }}>
					<Typography variant="h4" component="h2" align="center">
						{values.name},&nbsp;{values.sys.country}
					</Typography>
					<Typography variant="h4" component="h2" align="center">
						{values.main.temp.toFixed(0)}&deg;
					</Typography>
					<Box
						component="img"
						src={Icons(icon)}
						sx={{ width: "200px", margin: "0 auto" }}
					/>
					<Typography variant="h6" component="h4" align="center">
						{values.weather[0].description}
					</Typography>
				</Box>
			) : (
				<Typography variant="h5" component="h3" align="center">
					Ciudad no encontrada
				</Typography>
			)}
		</Box>
	);
};
