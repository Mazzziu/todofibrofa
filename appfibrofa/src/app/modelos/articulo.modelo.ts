export class Articulo{
    constructor(
        public codigo:string,
        public nombre:string,
        public categoria: string,
        public precio: number,
        public stock: number,
        public ancho: number,
        public alto: number,
        public largo: number,
    ){ }
}

export interface ArticuloDialogData {
    codigo:string,
    nombre:string,
    categoria: string,
    precio: number,
    stock:number,
    ancho: number,
    alto: number,
    largo: number,
}

