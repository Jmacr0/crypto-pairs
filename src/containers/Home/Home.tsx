import React from "react";

const Home = () => {
	const handleClick = async () => {
		const { data } = await fetch("/api/cmc")
			.then(response => {
				return response.json();
			});
		console.log(data);
	};
	return (
		<>
			<h1>
				Welcome to Crypto Pairs React app thats build using Webpack and Babel separately
			</h1> 
			<button onClick={handleClick}>request CMC</button>
		</>
	);
};

export default Home;