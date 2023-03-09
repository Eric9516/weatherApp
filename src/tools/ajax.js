import axios from "axios";

export const ajax = async (options) =>
	await axios.request(options).then((res) => res.data);