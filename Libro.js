export class Libro{
  ISBN
  titulo
  autor
  paginas

  constructor(ISBN = "",titulo = "",autor = "",paginas = 0){
    this.ISBN=ISBN
    this.titulo=titulo
    this.autor=autor
    this.paginas=paginas
  }

  getData(){
    return "El libro "+this.titulo+" con ISBN "+this.ISBN+" escrito por el autor "+this.autor+" tiene "+this.paginas+" paginas"
  }
}