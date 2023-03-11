import "./App.css";
import WheatherProvider from "./context/weatherContext";
import { Home } from "./pages/Home";

function App() {
	return (
		<>
			<WheatherProvider>
				<Home />
			</WheatherProvider>
		</>
	);
}

export default App;
