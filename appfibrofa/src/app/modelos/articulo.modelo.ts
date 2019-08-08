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
    ){ }
}

export interface ArticuloDialogData {
    codigo:string,
    nombre:string,
    categoria: string,
    precio: number,
    ancho: number,
    alto: number,
    largo: number,
    stock: number
}

