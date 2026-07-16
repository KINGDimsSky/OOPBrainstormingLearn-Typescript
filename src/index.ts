import { formatCurrency } from "./lib/utils.js";
import { Cart } from "./models/carts.js";
import { Product } from "./models/product.js"
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";

class Main {
    public static start() : void {
        try {
            console.log ("=== Menginisialisasi Studi kasus Ecommerce Learning Typesript OOP ===");
            
            //Ini error ya Karena Sudah dibuat Abstract (tidak bisa di instanctiate)
            /* const product1 = new Product(1, "ASUS Rog Stric", 2000000, 10);
            const product2 = new Product(2, "Axioo HYPE5 AMDX5-2", 6000000, 2); */

            const cart1 = new Cart();
            
            const Laptop = new PhysicalProduct({id: 1, name : 'Asus ROG Strix F12', price: 210000, stock: 12, weight: 12.4})
            const GtaV = new DigitalProduct({id: 2, name: 'Gta V Enhanced Edition', price: 500000, downloadLink: 'GtaV/Steam/Download'})

            cart1.addToCart(Laptop, 1);
            
            console.log ('==== Isi Keranjang Kamu ====')
            cart1.getCartItems().forEach((item) => {
                console.log(`- ${item.product.name} (x${item.quantity}) | Subtotal: ${formatCurrency({amount : (item.product.price * item.quantity)})}`);
            })

            const totalBelanja = cart1.calculateTotal();
            console.log ('-------------------------------')
            console.log (`Total yang harus dibayar Adalah : ${formatCurrency({amount : totalBelanja})}`)

            console.log (formatCurrency({amount : Laptop.calculateShippingFee(10)}));
            

        }catch (error) {
            console.error(error);
        }
    }
}

Main.start();