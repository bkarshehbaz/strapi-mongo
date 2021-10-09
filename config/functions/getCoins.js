const axios = require("axios");

//1. Import coingecko-api
const CoinGecko = require("coingecko-api");

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

const Coins = require("./AllCoinsDAtaFromCoge.json");

module.exports = async () => {
  //3. Make calls
  // let data = await CoinGeckoClient.ping();
  // var coins = await Coins.map((item, id) => item.id);
  // console.log("coins Object ##############", coins);
  // Coins.map((item, id) =>
  //   axios
  //     .get(
  //       `https://api.coingecko.com/api/v3/coins/${item.id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
  //     )
  //     .then(async (response) => {
  //       await strapi.query("Coins").create({
  //         name: response.name,
  //         symbol: response.symbol,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // );
};

// module.exports = async () => {
//   const rp = require("request-promise");
//   const requestOptions = {
//     method: "GET",
//     uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
//     qs: {
//       start: "1",
//       limit: "5000",
//       convert: "USD",
//     },
//     headers: {
//       "<X-CMC_PRO_API_></X-CMC_PRO_API_>KEY": "73d84415-36a0-44ad-b7fe-d7477c578e60",
//     },
//     json: true,
//     gzip: true,
//   };

//   rp(requestOptions)
//     .then((response) => {
//       console.log("API call response:", response.data);

//       let data = response.data;

//       response.data.map(async (item) => {
//         console.log("item @@@@@@@@@@", item.name);
//         await strapi.query("Coins").create({
//           name: item.name,
//           symbol: item.symbol,
//         });
//       });
//     })
//     .catch((err) => {
//       console.log("API call error:", err.message);
//     });

//   //   console.log("Coins Function called");
//   //   const { data } = await axios.get(
//   //     "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info"
//   //   );

//   //   console.log(data);
// };
