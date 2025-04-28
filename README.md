# Project UTS { Semester 4 } <img src=https://i.pinimg.com/564x/fd/88/8c/fd888c43145aa84d5e3037082d470910.jpg width="130px">
## PROFIL
| Variable           |             Isi            |
| -------------------|----------------------------|
| **Nama**           |         Oktavia Rizkha Kurniawati       |
| **NIM**            |          312310509         |
| **Kelas**          |          TI.23.A.5         |
| **Mata Kuliah**    |     Pemrograman Web 2     |
| **Dosen Pengampu** | Agung  |

# Simple WebSocket Server and Client

## Pendahuluan
Dalam era digital modern, komunikasi real-time antara server dan client menjadi sangat penting, terutama untuk aplikasi seperti chat, notifikasi instan, pembaruan harga saham, dan game online.  

WebSocket adalah protokol yang memungkinkan komunikasi dua arah (full-duplex) melalui koneksi TCP tunggal yang persisten. Ini berbeda dari HTTP biasa yang berbasis request-response. Dengan WebSocket, data dapat mengalir bebas antara server dan client tanpa membuka koneksi baru setiap saat.

Proyek ini adalah eksperimen sederhana membangun server WebSocket menggunakan Node.js dan client HTML yang dapat bertukar pesan secara real-time.

---

## Fitur
- Koneksi WebSocket persisten.
- Komunikasi dua arah (server ↔ client).
- Pesan real-time tanpa reload halaman.
- Indikator status koneksi.

---

## Teknologi yang Digunakan
- Node.js
- [ws](https://github.com/websockets/ws) (Library WebSocket untuk Node.js)
- HTML5 + JavaScript
- Browser Chrome/Firefox

---

## Persiapan
Pastikan sudah terpasang:
- Node.js (cek dengan `node -v`)
- Editor teks seperti Visual Studio Code
- Browser modern

---

## Instalasi dan Menjalankan

### 1. Clone atau Buat Folder Proyek
```bash
mkdir simple-websocket
cd simple-websocket
