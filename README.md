# Project UTS { Semester 4 } 
## PROFIL
| Variable           |             Isi            |
| -------------------|----------------------------|
| **Nama**           |         Oktavia Rizkha Kurniawati       |
| **NIM**            |          312310509         |
| **Kelas**          |          TI.23.A.5         |
| **Mata Kuliah**    |     Pemrograman Web 2     |
| **Dosen Pengampu** | Agung Nugroho, S.Kom., M.Kom.|

## Link Project
- **Repository GitHub**: [UTSPemrogramanWeb2 - GitHub](https://github.com/oktavia18/UTSPemrogramanWeb2.git)
- **Artikel Medium**: [WebSocket - Medium](https://medium.com/@viaokta11223/koneksi-real-time-tanpa-ribet-membangun-server-dan-client-websocket-dengan-mudah-68f44639cf68)
- **Bukti Cek Plagiasi**: [Drive - Google](https://drive.google.com/drive/folders/17NdHr_M2L-qoGQYBXZCDWgJMSncaRWJd)
---

# 🚀  Membuat ChatServer dan Client dengan WebSocket 
Dalam eksperimen ini, kita akan membangun sebuah server WebSocket sederhana menggunakan Node.js, serta membuat halaman HTML client yang dapat terhubung dan bertukar pesan dengan server tersebut.

---

# WebSocket

WebSocket adalah protokol komunikasi berbasis jaringan yang memungkinkan koneksi dua arah (full-duplex) antara client dan server secara real-time.  
Dengan WebSocket, baik client maupun server dapat saling mengirim dan menerima data kapan saja tanpa perlu membuat koneksi baru berulang-ulang, sehingga lebih efisien dibandingkan komunikasi tradisional berbasis HTTP.

---

## Teknologi yang Digunakan
- Node.js
- [ws](https://github.com/websockets/ws) (Library WebSocket untuk Node.js)
- HTML5 + JavaScript
- Browser Chrome/Firefox

## Persiapan
Pastikan sudah terpasang:
- Node.js (cek dengan `node -v`)
- Editor teks seperti Visual Studio Code
- Browser modern


## Instalasi dan Menjalankan

### 1. Clone atau Buat Folder Proyek

```
mkdir simple-websocket
cd simple-websocket
```

![Screenshot 2025-04-27 210949](https://github.com/user-attachments/assets/998c4711-80f2-4f82-a4df-f27a5b3b407c)



### 2. Inisialisasi Proyek dan Install Library WebSocket

```
npm init -y
npm install ws
```


![Screenshot 2025-04-27 211406](https://github.com/user-attachments/assets/54998bcb-0834-4a87-ad7c-7233b66a3ce7)


![Screenshot 2025-04-26 225701](https://github.com/user-attachments/assets/da28ab40-a6d7-4ecd-9cf6-33054bcce04f)


## 🛠 Langkah 2: Membuat Server WebSocket

Selanjutnya, buat file `server.js`

Server ini akan:
- Mendengarkan koneksi WebSocket pada port 8080
- Mengirim pesan “Halo dari server WebSocket!” ke setiap client yang terhubung
- Menerima pesan dari client dan mengirimkannya kembali dengan prefix
- Mencatat ketika client terputus

### Langkah 3: Membuat Client HTML

Selanjutnya, saya membuat file `Index.html`

Client HTML ini menyediakan:
- Antarmuka pengguna sederhana untuk terhubung ke server WebSocket
- Kotak pesan untuk menampilkan pesan yang dikirim dan diterima
- Formulir untuk mengirim pesan ke server
- Indikator status koneksi


### Langkah 4: Menjalankan Server WebSocket
Buka Teminal, ketik :

```
node server.js
```

Kalau berhasil, terminal akan menampilkan:
Server WebSocket berjalan di ws://localhost:8080

![Screenshot 2025-04-26 234339](https://github.com/user-attachments/assets/3117c860-0915-4b42-9622-49f558ff9c34)


#### Langkah 5: Membuka Server WebSocket pada Browser
1. Buka index.html di browser (bisa klik dua kali file-nya atau pakai ekstensi Live Server di VSCode).
2. Begitu halaman terbuka, browser akan connect ke server dan otomatis menerima pesan : “Halo dari server WebSocket!”

#### OUTPUT :

![Screenshot 2025-04-26 210541](https://github.com/user-attachments/assets/4bf944c4-3a91-4b4d-87da-beb74a430f2d)


### Hasil dan Analisis Eksperimen
Setelah menjalankan eksperimen, berikut adalah hasil dan analisis yang saya dapatkan:

### 1. Pembentukan Koneksi
Setelah server WebSocket dijalankan, terminal akan menampilkan pesan “Server WebSocket berjalan di ws://localhost:8080” dan mencatat setiap client baru yang terhubung.

![Screenshot 2025-04-26 195739](https://github.com/user-attachments/assets/96790281-8255-4216-ba52-99325365b415)


### 2. Pertukaran Pesan
Saat saya mengirim pesan melalui form, pesan tersebut langsung dikirimkan ke server melalui koneksi WebSocket yang sudah terbentuk. Server menerima pesan, mencatatnya di konsol, dan mengirimkan kembali pesan dengan prefix “Server menerima: “.
### 3. Penutupan Koneksi
Ketika tidak ada lagi percakapan yang berlanjut, browser otomatis mengirimkan frame penutupan koneksi ke server. status di browser berubah kembali menjadi “Koneksi telah ditutup”.

![Screenshot 2025-04-26 233446](https://github.com/user-attachments/assets/e56d67ff-00af-48e4-bc7e-fd295eda00d3)


### Hasil Eksperimen
Eksperimen ini menunjukkan bahwa WebSocket memungkinkan komunikasi dua arah secara real-time antara server dan client. Koneksi yang tetap terbuka mengurangi latensi dan memungkinkan pengiriman pesan langsung tanpa perlu membuka koneksi baru.

Dari eksperimen ini, dapat disimpulkan bahwa:
1. Koneksi Persisten: Koneksi tetap aktif selama komunikasi berlangsung.
2. Efisiensi: Komunikasi cepat dan tanpa overhead yang tinggi.
3. Mudah Digunakan: Library ws di Node.js mempermudah pembuatan server WebSocket.

WebSocket sangat cocok untuk aplikasi yang membutuhkan komunikasi waktu nyata seperti chat atau notifikasi langsung.

## 🔍 Referensi

- [MDN Web Docs.(2023). WebSockets API.](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API?source=post_page68f44639cf68) 
- [WebSocket.org. (2022). About WebSocket.](https://websocket.org/guides/websocket-protocol)
- [The WebSocket Protocol Internet Engineering Task Force (IETF).](https://datatracker.ietf.org/doc/html/rfc6455)
