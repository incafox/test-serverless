module.exports = class Character{
  constructor ({name, height, mass, hair_color, skin_color,eye_color, birth_year, gender, homeworld, films, species, vehicles, starships, created, edited, url}) {
    this.nombre = name
    this.altura = height
    this.peso = mass
    this.color_cabello =  hair_color 
    this.color_piel  =skin_color
    this.color_ojo = eye_color  
    this.nacimiento = birth_year 
    this.genero = gender 
    this.mundo_origen = homeworld
    this.peliculas = films
    this.especie = species 
    this.vehiculos = vehicles 
    this.naves = starships 
    this.creado = created 
    this.editado = edited
    this.url = url
  }
}
