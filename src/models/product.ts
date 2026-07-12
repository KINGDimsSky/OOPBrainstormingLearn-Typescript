import type { IProduct } from "../interfaces/product.js";

export class Product implements IProduct {
    private id : number;
    private name : string;
    private price : number;
    private stock : number;

    constructor(id : number, name : string, price : number, stock : number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;

        if (price <= 0 ) {
            throw new Error (`Harga Produk ${name} Tidak Boleh kurang dan harus Lebih dari 0!`);
        }else if (stock <= 0) {
            throw new Error (`Stock Produk ${name} Tidak Boleh kurang dan harus Lebih dari 0!`);
        }

    }

    public showDetailsProduct () : string {
       return `ID Produk : ${this.id} \n Nama Produk : ${this.name} \n Harga Produk : ${this.price} \n Stock Produk : ${this.stock}`
    } 

}