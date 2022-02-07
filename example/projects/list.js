const { Client } = require("@webshotapi/client");
const Config = require("../config");

(async () => {
  try {
    const client = new Client(Config.API_KEY);
    const response = await client.project().list(1);
    console.log("Status Code:", response.status());
    console.log("Response Body:", response.json());
  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err?.response?.data);
  }
})();
