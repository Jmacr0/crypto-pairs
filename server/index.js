require("dotenv").config(); 

const express = require("express");
const app = express();

const axios = require("axios");

app.get("/api/cmc", async (_req, res) => {
	axios("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
		{
			headers: {
				"X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
				"Accept": "application/json",
				"Accept-Encoding": "deflate, gzip",
			}
		})
		.then(({ data })=>{
			res.json(data);
		})
		.catch(error=>{
			console.log(error);
		});
});

app.listen(3000, () => console.log("🌏 Crypto Pairs Server is listening on port 3000."));