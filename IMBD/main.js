class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    //Destructurar
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    //Validaciones de metodos
    this.validarId(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  } //finConstructor

  //Atributo estaticos getter
  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War, Western",
    ];
  }
  //Metodo estatico seter
  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(",")}`
    );
  }

  //METODOS GENERICOS
  //validar cadenas de texto
  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vació.`);

    if (typeof valor !== "string")
      return console.error(
        `Los valores ${propiedad} "${valor}" NO son cadenas de texto.`
      );

    return true;
  }

  //Valido la longitud de los caracteres tanto para atitulo como para director
  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" exceede el numero permitido de caracteres (${longitud})`
      );
    return true;
  }

  //validar numero fecha de estreno
  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vació.`);

    if (typeof valor !== "number")
      return console.error(
        `Los valores ${propiedad} "${valor}" NO son numeros.`
      );

    return true;
  }

  //validar arreglo de país o paises
  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vació.`);

    if (!(valor instanceof Array))
      return console.error(
        `El valor ${valor} no es un Array, ingrese el array solicitado.`
      );

    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" NO tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor ${propiedad} "${valor}" ingresado NO es una cadena de texto. `
        );
    }
    return true;
  }

  //METODOS ESPECIFICOS
  //validad que el ID cumpla con el requerimiento
  validarId(id) {
    if (this.validarCadena("IMDB ID", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(
          `IMDB ID"${id}" no es válido debe tener 9 caracteres, los dos primeros deben ser letras minusculas y los 7 restantes números `
        );
      }
    }
  }

  //valida la longitud del titulo 50 caracteres permitidos
  validarTitulo(titulo) {
    if (this.validarCadena("TÍTULO", titulo)) {
      this.validarLongitudCadena("Título", titulo, 100);
    }
  }

  //valida la longitud de director 100 caracteres permitidos
  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  //valida la longitud del año 4 digitos
  validarEstreno(estreno) {
    if (this.validarNumero("Estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno)) {
        return console.error(
          `Año de estreno "${estreno}" no es valido, debe ser un número de cuatro digitos`
        );
      }
    }
  }

  //Valida el pais o paises
  validarPais(pais) {
    this.validarArreglo("País", pais);
  }

  //Valida los generos y los compara con el Atributo estatico si existe
  validarGeneros(generos) {
    if (this.validarArreglo("Géneros", generos)) {
      for (const genero of generos) {
        console.log(genero, Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero))
          console.error(`Generos incorrectos "${generos.join(",")}"`);
        Pelicula.generosAceptados();
      }
    }
  }

  //valida la calificación flotante 0,0
  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion)) {
      return calificacion < 0 || calificacion > 10
        ? console.error(
            `la calificacion tiene que estar en un rango entre 0 y 10.`
          )
        : (this.calificacion = calificacion.toFixed(1));
    }
  }

  //Ficha técnica
  fichaTecnica() {
 let fichatecnica = document.getElementById('#info').value;

 document.fichatecnica.innerHTML =  (`
      Ficha Técnica:\n
      ID IMBD: "${this.id}"\n
      Titulo: "${this.titulo}"\n
      Director: "${this.director}"\n
      Año Estreno: "${this.estreno}"\n
      Pais: "${this.pais.join("-")}"\n
      Géneros: "${this.generos.join(",")}"\n
      Calificación: "${this.calificacion}"\n
      `);
  }
} //finClasePelicula

//Pelicula.generosAceptados();
// const peli = new Pelicula({
//   id: "tt1234567",
//   titulo: "La quinta ola",
//   director: "leonardo rojas escorces",
//   estreno: 2022,
//   pais: ["colombia", "Mexico"],
//   generos: ["Horror", "Adult", "Animation"],
//   calificacion: 7.999,
// });
// peli.fichaTecnica();
const misPelis = [
  {
  id: "tt1245121",
  titulo: "The fifth wave",
  director: "Sean Peen",
  estreno: 2007,
  pais: ["USA"],
  generos: ["Adventure", "Biography", "Drama"],
  calificacion: 8.1,
},
{
  id: "tt8541279",
  titulo: "Rocky Balboa",
  director: "Silvester Stallone",
  estreno: 2006,
  pais: ["USA"],
  generos: ["Action", "Drama", "Sport"],
  calificacion: 7.1,
},
{
  id: "tt9654326",
  titulo: "The Dark Knight",
  director: "leonardo rojas Scorces",
  estreno: 2008,
  pais: ["US", "UK"],
  generos: ["Action", "Drama", "Crime"],
  calificacion: 9.0,
}
];
misPelis.forEach(el => new Pelicula(el).fichaTecnica());
