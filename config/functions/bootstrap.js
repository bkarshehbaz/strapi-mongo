// "use strict";
const axios = require("axios");
const Coins = require("./Mongodb-2.json");
// var fs = require("fs");
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = () => {
  var counter = 1;
  var array = [];
  var updateCounter = 0;
  var notFound = 0;
  // Run it for just 39

  async function processArray() {
    for (let index = 1; index <= 39; index++) {
      console.log("###############################", index);
      await getData(index);
      // await updateMongo(index);

      await delay();
    }

    console.log("All Records Updated");
  }

  async function updateMongo(Coin) {
    // console.log("Coin", Coin);
    await strapi
      .query("coins")
      .create(
        Coin
        // { coinId: Coin.coinId },
        // {

        // coinId: Coin.coinId,
        // totalVolume: Coin.totalVolume,
        // promoted: false,
        // totalvotes: 0,
        // image: Coin.image,
        // marketcap: Coin.marketcap,
        // launch: "",
        // price: Coin.price,
        // hour: Coin.hour,
        // oneday: Coin.oneday,
        // website: "",
        // telegram: "",
        // facebook: "",
        // twitter: "",
        // addresscode: "",
        // details: "",
        // }
      )
      .then((response) => {
        updateCounter = updateCounter + 1;
        console.log("MongoDB Updated ", updateCounter, Coin.coinId);
      })
      .catch(async (error) => {
        notFound = notFound + 1;
        console.log(
          Coin.coinId,
          notFound,
          "******************************",
          error
        );
      });
  }

  async function getData(number) {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${number}&sparkline=false&price_change_percentage=1h%2C24h`
      )
      .then((response) => {
        if (response.data.length > 0) {
          response.data.map(async (item, id) => {
            var data2 = {
              coinId: item.id,
              name: item.name,
              symbol: item.symbol,
              totalVolume: item.total_supply,
              promoted: false,
              totalvotes: 0,
              image: item.image,
              marketcap: item.current_price * item.total_supply,
              launch: "",
              price: item.current_price,
              hour: item.price_change_percentage_1h_in_currency,
              oneday: item.price_change_percentage_24h_in_currency,
              website: "",
              telegram: "",
              facebook: "",
              twitter: "",
              addresscode: "",
              details: "",
            };
            // console.log(item.id);

            // console.log("data2", data2);
            await updateMongo(data2);
          });
        } else {
          console.log("Response is empty 767676767676767676767676767676");
        }
      });
  }

  // Just for getting data and stored in Json file
  // async function getData(number) {
  //   axios
  //     .get(
  //       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${number}&sparkline=false&price_change_percentage=1h%2C24h`
  //     )
  //     .then((response) => {
  //       if (response.data) {
  //         console.log(response.data.length);
  //         response.data.map((item, id) => {
  //           var data2 = {
  //             coinId: item.id,
  //             name: item.name,
  //             symbol: item.symbol,
  //             totalVolume: item.total_supply,
  //             promoted: true,
  //             totalvotes: 0,
  //             image: item.image,
  //             marketcap: item.current_price * item.total_supply,
  //             launch: "",
  //             price: item.current_price,
  //             hour: item.price_change_percentage_1h_in_currency,
  //             oneday: item.price_change_percentage_24h_in_currency,
  //             website: "",
  //             telegram: "",
  //             facebook: "",
  //             twitter: "",
  //             addresscode: "",
  //           };

  //           let usersjson = fs.readFileSync("results.json", "utf-8");

  //           let users = JSON.parse(usersjson);
  //           users.push(data2);
  //           usersjson = JSON.stringify(users);
  //           fs.writeFileSync(
  //             "results.json",
  //             usersjson,
  //             "utf-8",
  //             function SuccessFunction(err, data) {
  //               console.log("Done");
  //             }
  //           );
  //         });
  //       }
  //     });
  // }

  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 60000));
  }
  // processArray();
};
