const Util = require("./Util");
const peopleTable = Util.getTableName("people");
//const uuidv4 = require("uuid/v4");
const axios = require("axios");
/**
 * @module Get
 */
module.exports = {
  /** Get people from SWAPI () */
  async getAvailablePeople(event) {
    const page = event.pathParameters.page;
    if (isNaN(page) || page == "0") {
      return Util.envelop({ error: "invalid param, use 1-x" });
    }
    let res = await axios.get(
      "https://swapi.py4e.com/api/people/?page=" + page
    );
    return Util.envelop(res.data);
  },

  /** Get people/character from our dynamodb */
  async getSavedPeople(event) {
    const tableName = peopleTable;
    if (!tableName.includes("dev") && !tableName.includes("test")) {
      console.log(
        `WARNING: Table name [${tableName}] ` +
          `contains neither dev nor test, not purging`
      );
      return;
    }
    const allRecords = await Util.DocumentClient.scan({
      TableName: tableName,
    }).promise();
    return Util.envelop({ allRecords });
  },
};
