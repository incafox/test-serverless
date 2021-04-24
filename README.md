
> ### AWS DynamoDB + Lambda test api SWAPI 

Simple proyecto que visualiza/guarda/consulta guardados  personajes de starwars SWAPI

# Instrucciones


## Inicia el server local

```
npm install
npm run start
```

Inicia DynamoDB emulador offline. Usa api calls con url base: `http://localhost:3000/api` asi:

1. Consulta personajes por paginacion:  [GET]


```
  http://localhost:3000/api/people/page/4

```
2. Escoje un personaje y guardalo enviandolo a:  [POST]

```
  http://localhost:3000/api/save

```
  body: {
    "name": "Qui-Gon Jinn", 
    "height": "193", 
    "mass": "89", 
    "hair_color": "brown", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "92BBY", 
    "gender": "male", 
    "homeworld": "https://swapi.py4e.com/api/planets/28/", 
    "films": [
        "https://swapi.py4e.com/api/films/4/"
    ], 
    "species": [
        "https://swapi.py4e.com/api/species/1/"
    ], 
    "vehicles": [
        "https://swapi.py4e.com/api/vehicles/38/"
    ], 
    "starships": [], 
    "created": "2014-12-19T16:54:53.618000Z", 
    "edited": "2014-12-20T21:17:50.375000Z", 
    "url": "https://swapi.py4e.com/api/people/32/"
 }

3. Consulta los personajes guardados: [GET]

```
  http://localhost:3000/api/people/saved/

```
## Test local
```
npm test
```
## Estructura

![diagrama](estructura.png)

## Deploy
```
npm run deploy
```
