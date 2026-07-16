import type { IProduct } from "../interfaces/product.js";

export abstract class Product implements IProduct {
    private _id : number;
    private _name : string;
    private _price : number;
    private _stock : number;
    
    constructor(id : number, name : string, price : number, stock : number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._stock = stock;

        if (price <= 0 ) {
            throw new Error (`Harga Produk ${name} Tidak Boleh kurang dan harus Lebih dari 0!`);
        }else if (stock < 0) {
            throw new Error (`Stock Produk ${name} Tidak Boleh kurang dari 0!`);
        }

    }

    get name () : string {
        return this._name
    }

    set name (name : string) {
        this._name = name;
    }

    get price () : number {
        return this._price
    }

    set price (price : number) {
        if (price <= 0) {
            throw new Error(`Harga Produk ${this.name} Tidak boleh Kurang sama dengan Dari 0!`)
        }
    
        this._price = price; 
    }

    get stock () : number {
        return this._stock
    }

    set stock (stock : number) {
        this._stock = stock
    }

    public restock (stock : number) {
        if (stock <= 0) {
            throw new Error ('Stock baru tidak boleh 0 dan Kurang lebih dari 0!')
        }

        this._stock += stock
    }

    public abstract getFinalPrice () : number; 

    public abstract showDetailsProduct () : string;

}