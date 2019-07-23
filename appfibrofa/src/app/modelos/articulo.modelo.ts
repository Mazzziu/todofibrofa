export class Articulo{
    constructor(
        public codigo:string,
        public nombre:string,
        public categoria: string,
        public precio: number,
        public ancho: number,
        public alto: number,
        public largo: number,
        public stock: number
    ){}
}