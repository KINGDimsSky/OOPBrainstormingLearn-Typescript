import type { IPhysicalProduct, IProduct } from "../interfaces/product.js";
import { Product } from "./product.js";

export class PhysicalProduct extends Product {
    private _weight : number;

    constructor ({id, name , price, stock, weight} : IPhysicalProduct) {
        super(id, name, price, stock)

        this._weight = weight
    }
    
    public override getFinalPrice () : number {
        return this.price * 10
    }

    public override showDetailsProduct(): string {
        return `${super.showDetailsProduct()}\n Dan Weight : ${this._weight}`
    }


}