const Util = require("./Util");
const peopleTable = Util.getTableName("people");
//const slugify = require("slugify");
var Character = require("../models/character");
const uuidv4 = require("uuid/v4");
/**
 * @module Post
 */
module.exports = {
  /** Create(save) selected people(star war character)*/
  async save(event) {
    const body = JSON.parse(event.body);
    if (!body.name && !body.url && !body.species) {
      return Util.envelop("Data no valida", 422);
    }
    var temp = new Character(body);
    var id = { id: uuidv4() };
    var person = { ...temp, ...id };
    await Util.DocumentClient.put({
      TableName: peopleTable,
      Item: person,
    }).promise();
    return Util.envelop(person);
  },

  /** Delete sw character */
  async delete(event) {
    const urlCharacter = event.body.url;
    const params = {
      TableName: "todos",
      Key: {
        url: urlCharacter,
      },
    };
    await Util.DocumentClient.delete({
      TableName: peopleTable,
      Key: { url },
    }).promise();
    return Util.envelop({ deleted: "urlCharacter" });
  },
};
