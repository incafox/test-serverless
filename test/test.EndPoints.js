const TestUtil = require("./TestUtil");
const axios = require("axios");
var assert = require("assert");

const character = {
  name: "Rey",
  height: "unknown",
  mass: "unknown",
  hair_color: "brown",
  skin_color: "light",
  eye_color: "hazel",
  birth_year: "unknown",
  gender: "female",
  homeworld: "https://swapi.py4e.com/api/planets/28/",
  films: ["https://swapi.py4e.com/api/films/7/"],
  species: ["https://swapi.py4e.com/api/species/1/"],
  vehicles: [],
  starships: [],
  created: "2015-04-17T06:54:01.495077Z",
  edited: "2015-04-17T06:54:01.495128Z",
  url: "https://swapi.py4e.com/api/people/85/",
};

describe("Obtiene caracteres por paginacion", async () => {
  describe("Numero de caracteres/personajes en pagina 3", () => {
    it("obtiene los disponibles por paginacion de swapi", async () => {
      let response = (await axios.get(`/people/page/3`)).data;
      //10 characters/personajes por pagina
      assert.equal(response.results.length, 10);
    });
  });
});

describe("Guarda Personaje", async () => {
  describe("StatusCode correcto", async function () {
    before(() => {
      axios.post(`/save`, character);
    });
    it("obtiene los guardados en nuestro dynamodb", async () => {
      let response = await axios.get(`/people/saved/`);
      assert.notEqual(response.data, undefined);
    });
  });
});
