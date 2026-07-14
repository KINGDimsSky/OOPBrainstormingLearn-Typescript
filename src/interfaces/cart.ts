import type { Product } from "../models/product.js"

export interface ICartItem {
    product : Product,
    quantity : number,
}

export interface ICart {
    addToCart : (products: Product, quantity : number) => void;
    getCartItems : () => ICartItem[];
    calculateTotal : () => number; 
}

