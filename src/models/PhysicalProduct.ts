import type { IPhysicalProduct, IProduct } from "../interfaces/product.js";
import type { IShippable } from "../interfaces/shippable.js";
import { Product } from "./product.js";

export class PhysicalProduct extends Product implements IShippable {
    private _weight : number;

    constructor ({id, name , price, stock, weight} : IPhysicalProduct) {
        super(id, name, price, stock)

        this._weight = weight
    }

    public override getFinalPrice () : number {
        return this.price * 1.10
    }

    public calculateShippingFee (distanceInKM: number) : number {
        return (distanceInKM * 5000) * this._weight;
    }

    public override showDetailsProduct(): string {
        return `Detail Product Fisik ini adalah \n nama : ${super.name} \n price : ${super.price} \n stock : ${super.stock} \n weight : ${this._weight}`
    }

}