import React, { useState } from "react";

export const WeatherContext = React.createContext();

const WheatherProvider = ({ children }) => {
	const [city, setCity] = useState("");

	const searchCity = (ciudad) => {
		setCity(ciudad);
	};

	return (
		<WeatherContext.Provider value={{ city, searchCity }}>
			{children}
		</WeatherContext.Provider>
	);
};

export default WheatherProvider;
