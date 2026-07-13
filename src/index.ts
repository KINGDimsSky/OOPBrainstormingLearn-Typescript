import { Product } from "./models/product.js"
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
    

            console.log (product1.price);
            console.log('\n');
            product1.price = 1000000;
            console.log ('Saldo Berhasil ditambahkan!');
            console.log (product1.price);
            console.log (product1.stock);

            console.log (`\n`);
            
            product1.restock(20);
            console.log (product1.stock);

        }catch (error) {
            console.error(error);
        }
    }
}

Main.start();