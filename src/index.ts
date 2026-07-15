import { formatCurrency } from "./lib/utils.js";
import { Cart } from "./models/carts.js";
import { Product } from "./models/product.js"
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";

class Main {
    public static start() : void {
        try {
            console.log ("=== Menginisialisasi Studi kasus Ecommerce Learning Typesript OOP ===");
    
            const product1 = new Product(1, "ASUS Rog Stric", 2000000, 10);
            const product2 = new Product(2, "Axioo HYPE5 AMDX5-2", 6000000, 2);
    
            console.log (product1.showDetailsProduct());
            console.log (`\n`);
            console.log (product2.showDetailsProduct());
            console.log (`\n`);

            const cart1 = new Cart();
            cart1.addToCart(product1, 10);
            cart1.addToCart(product2, 1);
            
            console.log ('==== Isi Keranjang Kamu ====')
            cart1.getCartItems().forEach((item) => {
                console.log(`- ${item.product.name} (x${item.quantity}) | Subtotal: ${formatCurrency({amount : (item.product.price * item.quantity)})}`);
            })

            const totalBelanja = cart1.calculateTotal();
            console.log ('-------------------------------')
            console.log (`Total yang harus dibayar Adalah : ${formatCurrency({amount : totalBelanja})}`)


            const cart2 = new Cart();
            const ProdukFisik = new PhysicalProduct({id: 1, name: 'Cooler HP Kipas', price : 25000, stock: 5, weight: 12.5});
            const ProductDigital = new DigitalProduct({id : 1,  downloadLink : '/steamgtav/premiumdownload', name: 'Gta V Enhanced Edition', price: 500000})

            cart2.addToCart(ProdukFisik, 1);
            cart2.addToCart(ProductDigital, 2);

            console.log (ProdukFisik.showDetailsProduct())
            console.log ('\n');
            console.log (ProdukFisik.getFinalPrice());
            console.log (ProdukFisik.showDetailsProduct());

            console.log ('\n');
            console.log (ProductDigital.getFinalPrice())

            console.log ('\n');

            console.log (cart2.calculateTotal())

        }catch (error) {
            console.error(error);
        }
    }
}

Main.start();