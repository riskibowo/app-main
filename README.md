# 🏠 Katalog Perumahan - Aplikasi Web Full-Stack

Ini adalah aplikasi web *full-stack* untuk katalog properti. Pengguna dapat menelusuri, mencari, memfilter, dan melihat detail berbagai perumahan.

Proyek ini dibagi menjadi dua bagian:
* **Backend**: API yang dibuat dengan FastAPI (Python) dan terhubung ke MongoDB.
* **Frontend**: Aplikasi klien yang dibuat dengan React.js.

---

## 💻 Tumpukan Teknologi (Tech Stack)

### Backend
* **Python**
* **FastAPI** - *Framework* web asinkron.
* **MongoDB** (via **Motor**) - Database NoSQL.
* **Uvicorn** - Server ASGI.

### Frontend
* **React.js** (via Create React App + Craco).
* **React Router** - Untuk navigasi antar halaman.
* **Tailwind CSS** - *Framework* CSS utility-first.
* **shadcn/ui** - Komponen UI yang dibangun di atas Radix UI.

---

## ✨ Fitur Utama

* **Halaman Utama**: Menampilkan daftar properti unggulan dan semua properti.
* **Pencarian & Filter**: Mencari properti berdasarkan nama, memfilter berdasarkan lokasi, dan mengurutkan berdasarkan harga/unggulan.
* **Halaman Detail**: Tampilan mendalam untuk setiap properti, termasuk galeri (jika ada), deskripsi, dan fasilitas.
* **Halaman Kontak**: Formulir kontak untuk mengirimkan pertanyaan (saat ini disimulasikan di frontend).
* **Desain Responsif**: Dapat diakses di perangkat desktop maupun mobile.

---

## 🚀 Cara Menjalankan Proyek

Anda perlu menjalankan backend dan frontend secara terpisah di dua terminal.

### Prasyarat
* Pastikan server **MongoDB** Anda berjalan, idealnya di `mongodb://localhost:27017` sesuai konfigurasi `backend/.env`.

### 1. Menjalankan Backend (Terminal 1)

1.  Masuk ke folder backend:
    ```bash
    cd backend
    ```

2.  Buat dan aktifkan *virtual environment*:
    ```bash
    # Buat venv
    python -m venv venv

    # Aktifkan di Windows (PowerShell)
    .\venv\Scripts\activate
    
    # Aktifkan di macOS/Linux
    # source venv/bin/activate
    ```

3.  Instal semua dependensi Python:
    ```bash
    pip install -r requirements.txt
    ```

4.  Jalankan server FastAPI:
    ```bash
    uvicorn server:app --reload
    ```
    Server backend akan berjalan di `http://127.0.0.1:8000`.

### 2. Menjalankan Frontend (Terminal 2)

1.  Buka terminal **baru**.
2.  Masuk ke folder frontend:
    ```bash
    cd frontend
    ```

3.  Instal semua dependensi Node.js:
    ```bash
    npm install
    ```
    *(Catatan: Jika Anda mengalami galat `ERESOLVE`, pastikan dependensi di `package.json` sudah diperbaiki, atau jalankan `npm install --legacy-peer-deps`)*

4.  Jalankan aplikasi React:
    ```bash
    npm start
    ```
    Aplikasi frontend akan otomatis terbuka di `http://localhost:3000`.

---

## 🌐 API Endpoints (Contoh)

Endpoint API utama di-host di bawah prefiks `/api`.

* `GET /api/`: Mengembalikan pesan selamat datang JSON.
* `GET /api/status`: Mengambil daftar status dari MongoDB.
* `POST /api/status`: Membuat entri status baru.