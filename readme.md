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

*Hari 5: Inheritance (Pewarisan Dasar) & Polymorfisme Dasar (Overriding)*

Membuat tipe produk khusus (Produk Fisik vs Produk Digital) yang mewarisi sifat dari produk utama.

*Hari 6: Polymorfisme (diperkuat) dengan menggunakan Abstract*

Mengubah perilaku atau fungsi spesifik pada class anak (misal: produk fisik punya cara hitung total yang berbeda karena ada ongkir).

*Hari 7: Multi-Interface & Strategy Pattern (Sistem Pembayaran)*

Fokus: Belajar mengombinasikan banyak interface untuk fitur dinamis seperti E-Wallet vs Transfer Bank

*Hari 8: Validasi Domain Tingkat Lanjut & Custom Error Handling*

Fokus: Membuat sistem kebal dari data rusak menggunakan Custom Exceptions (InsufficientStockError, dll).

*Hari 9: TypeScript Generics & Mock Repository Pattern*

Fokus: Jembatan Kritis ke Database! Belajar membuat blueprint penyimpanan data yang fleksibel sebelum memakai Prisma

*Hari 10: Pemisahan Layer & Integrasi Alur Bisnis (Clean Architecture)*

Fokus: Menggabungkan Controller, Service, dan Repository menjadi satu alur aplikasi retail yang utuh.


**---------------------------------------------**

**🚀 Visi Mega Final Project (Pasca Hari 10): E-Commerce Service dengan Prisma ORM**

Setelah kamu lulus dari Hari 10, kita tidak akan berhenti di simulasi CLI sederhana. Kita akan langsung terjun ke arsitektur industri dengan membangun Backend E-Commerce Core API:

*Teknologi: TypeScript, Node.js, Prisma ORM, dan Database (PostgreSQL / MySQL / SQLite).*

*Arsitektur: Clean Architecture / Layered Architecture. Kamu akan melihat bagaimana abstract class dan interface yang kita pelajari 7 hari ini dipakai untuk membungkus query database Prisma agar kodemu rapi, mudah ditest, dan tidak berantakan.*

Fitur Kompleks:

Stock Reservation: Memastikan stok berkurang otomatis saat checkout di database.

Transaction Logs: Menyimpan histori pembayaran secara permanen di tabel database.

Polymorphic Pricing: Menyimpan metadata produk fisik/digital di database dengan relasi tabel yang tepat.

**------------------------------------------------------**

`Day 1 Passed` - Basic Constructor
`Day 2 Passed` - different Private and Public method (encapulation but not final)
`Day 3 Passed` - (encapsulation getter and setter);
`Day 4 Passed` - (Composition Object "Has-A" /  "Class Product Has-A Class Cart")
`Day 5 Passed` - (Inheritance And Polymorfisme / "Public Method can Override and Class cand Extends")
`Day 6 Passed` - (Polymorfisme and Abstraction / "When using Abstract and When Using Implements and Parent abstract Can Inheritance abstract Method or props ")
`Day 7 - Soon` - ('')