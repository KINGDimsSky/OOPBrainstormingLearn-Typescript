**Cetak Biru Proyek Kita: "EduRetail Core Engine**

Kita akan membangun satu sistem ekosistem retail/toko digital.
Mulai dari manajemen stok hari ini, lalu besok kita tambah sistem kasir, sistem diskon, membership pelanggan, hingga sistem pembayaran finansial.

Fully Typescript dan menerapkan SOLID Principle, Dan OOP Full!

**🗺️ Peta Jalan Baru Fase 1: Dari Nol ke OOP Berkelanjutan**
*Hari 1: Constructor & Basic Property Initialization*

Fokus membuat cetakan objek (Class) dan memastikan objek tersebut "lahir" dengan data awal yang lengkap dan valid melalui constructor.

*Hari 2: Visibility Modifiers (private & public)*

Belajar menyembunyikan data sensitif (seperti harga dan stok) agar tidak bisa diubah secara sembarangan dari luar class.

*Hari 3: Encapsulation dengan Getter & Setter*

Membuat jalan masuk yang aman untuk membaca data dan memvalidasi perubahan nilai (misal: stok tidak boleh minus).

*Hari 4: Komposisi Objek (Class Hubungan Dasar)*

Belajar bagaimana sebuah Class (Keranjang Belanja) bisa menyimpan dan berinteraksi dengan Class lain (Produk).

*Hari 5: Inheritance (Pewarisan Dasar)*

Membuat tipe produk khusus (Produk Fisik vs Produk Digital) yang mewarisi sifat dari produk utama.

*Hari 6: Method Overriding (Polimorfisme Dasar)*

Mengubah perilaku atau fungsi spesifik pada class anak (misal: produk fisik punya cara hitung total yang berbeda karena ada ongkir).

*Hari 7: Pengenalan Interface (Kontrak Kerja)*

Belajar membuat standar baku (cetakan tanpa isi) sebelum membuat class baru.

*Hari 8: Implementasi Multi-Interface*

Simulasi metode pembayaran (misal: Cash vs Transfer Bank) yang tunduk pada satu kontrak interface yang sama.

*Hari 9: Validasi Domain & Error Handling Sederhana*

Mengamankan logika bisnis agar sistem otomatis berhenti dan memberi tahu letak kesalahan jika ada data yang tidak masuk akal.

*Hari 10: Integrasi Alur Belanja Akhir*

Menyatukan semua potongan kode dari Hari 1-9 menjadi satu simulasi transaksi belanja yang utuh di file index.ts.


**---------------------------------------------**

`Day 1 Passed` - Basic Constructor
`Day 2 Passed` - different Private and Public method (encapulation but not final)
`Day 3 Passed` - (encapsulation getter and setter);
`Day 4 Passed` - (Composition Object "Has-A" /  "Class Product Has-A Class Cart")