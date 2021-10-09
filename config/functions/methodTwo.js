// "use strict";
const axios = require("axios");
const Coins = require("./AllCoinsDAtaFromCoge.json");

// mongodb+srv://bkar:<password>@cluster0.d8sxr.mongodb.net/test



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
  // Coins.map((item, id) =>
  //   setTimeout(function () {
  //     axios
  //       .get(
  //         `https://api.coingecko.com/api/v3/coins/${item.id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
  //       )
  //       .then(async (response) => {
  //         console.log(response.data.name, "-", response.data.symbol);
  //         await strapi.query("coins").create({
  //           name: response.name,
  //           symbol: response.symbol,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log("error", error);
  //       });
  //   }, 1000)
  // );
  // var coins = Coins.slice(0, 10).map((item, id) => item.id);

  // console.log("coins Object ##############", coins);

  async function processArray(Coins) {
    for (const item of Coins) {
      await getData(item);
    }
    console.log("Done!");
  }

  async function getData(item) {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${item.id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
      )
      .then((response) => {
        // console.log(response.data, "-", response.data.length);

        const data = {
          name: response.data.name,

          promoted: true,
          totalvotes: 345,
          image: response.data.image.large,
          marketcap: 0343434,
          symbol: response.data.symbol,
          change: "asdfasdf",
          launch: "asdfasdf",
          price: response.data.market_data.current_price.usd,
          hour: "one hour",
          oneday: "one day",
          website: response.data.links.homepage[0],
          telegram: response.data.links.telegram_channel_identifier,
          facebook: response.data.links.facebook_username,
          twitter: response.data.links.twitter_screen_name,
          addresscode: response.data.contract_address,
        };

        strapi
          .query("coins")
          .create(data)

          .then((response) => {
            console.log(
              "1111111111111111111111111111111111111111111111111111111111111111"
            );
            console.log(
              "1111111111111111111111111111111111111111111111111111111111111111"
            );
            console.log("coin created and added to Database");
          })
          .catch((error) => {
            console.log("****************************************************");
            console.log("****************************************************");
            console.log(item.id, error);
          });
      });

    await delay();
  }

  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 1100));
  }

  // Coins.map((item, id) => {
  //   setTimeout(function () {
  //     axios
  //       .get(
  //         `https://api.coingecko.com/api/v3/coins/${item.id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
  //       )
  //       .then(async (response) => {
  //         // console.log(response.data, "-", response.data.length);

  //         const data = {
  //           name: response.data.name,

  //           promoted: true,
  //           totalvotes: 345,
  //           image: response.data.image.large,
  //           marketcap: 0343434,
  //           symbol: response.data.symbol,
  //           change: "asdfasdf",
  //           launch: "asdfasdf",
  //           price: response.data.market_data.current_price.usd,
  //           hour: "one hour",
  //           oneday: "one day",
  //           website: response.data.links.homepage[0],
  //           telegram: response.data.links.telegram_channel_identifier,
  //           facebook: response.data.links.facebook_username,
  //           twitter: response.data.links.twitter_screen_name,
  //           addresscode: response.data.contract_address,
  //         };
  //         await strapi
  //           .query("coins")
  //           .create(
  //             // name: response.name,
  //             // promoted: true,
  //             // image: response.image,
  //             // marketcap: response.marketcap,
  //             // totalvotes: response.totalvotes,
  //             // symbol: response.symbol,
  //             // change: response.change,
  //             // launch: response.launch,
  //             data
  //           )
  //           .then((response) => {
  //             console.log(
  //               "1111111111111111111111111111111111111111111111111111111111111111"
  //             );
  //             console.log(
  //               "1111111111111111111111111111111111111111111111111111111111111111"
  //             );
  //             console.log("coin created and added to Database");
  //           });
  //       })
  //       .catch((error) => {
  //         console.log(
  //           "################################################################################"
  //         );
  //         console.log(
  //           "################################################################################"
  //         );
  //         console.log(
  //           "################################################################################"
  //         );
  //         console.log(
  //           "################################################################################"
  //         );
  //         console.log(
  //           "################################################################################"
  //         );

  //         console.log("error", error);
  //       });
  //   }, 1100);
  // });

  // processArray(Coins);
};
