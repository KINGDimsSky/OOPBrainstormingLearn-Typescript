import type { ICart, ICartItem } from "../interfaces/cart.js";
import type { Product } from "./product.js";

export class Cart implements ICart{
    private _items : ICartItem[] = []

    constructor () {
    }

    public addToCart (payloadProduct : Product, quantity : number) : void {
        const hasExistingProduct = this._items.find((item) => item.product.name === payloadProduct.name);

        const currentQtyInCart = hasExistingProduct ? hasExistingProduct.quantity : 0;
        const targetQty = currentQtyInCart + quantity;

        if (targetQty > payloadProduct.stock) throw new Error ('Kuantitas Produk Yang ingin ditambahkan tidak boleh lebih banyak dari Stock dari Produk itu sendiri!');

        if (hasExistingProduct) {
            this._items = this._items.map((item) =>
                item.product.name === payloadProduct.name ? {...item, quantity: targetQty} : item)
        } else {
            const newProducts : ICartItem = {
                product : payloadProduct,
                quantity : quantity
            }

            this._items.push(newProducts);
        }
    }

    public getCartItems () : ICartItem[] {
      return this._items;
    }

    public calculateTotal () : number {
       const totalPrice = this._items.reduce((total, item) => total + (item.product.getFinalPrice() * item.quantity), 0);

       return totalPrice;
    } 

}