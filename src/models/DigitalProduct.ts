import type { IDigitalProductsProps,} from "../interfaces/product.js";
import { Product } from "./product.js";

export class DigitalProduct extends Product {
    private _downloadLink : string

    constructor ({id, name, price, stock = 9999, downloadLink} : IDigitalProductsProps ) {
        super(id, name, price, stock);

        if (stock <= 0) {
            throw new Error ('DigitalProduct Tidak Boleh memiliki 0 Stock!')
        }

        this._downloadLink = downloadLink
    }

    public override showDetailsProduct(): string {
        return `${super.showDetailsProduct()}\n Download Link : ${this._downloadLink}`
    }

}