# Wedding Planner

## Bahasa Indonesia

Aplikasi full-stack untuk merencanakan dan melacak persiapan pernikahan — checklist, timeline, dan anggaran — dengan data tersimpan di database.

### Tech Stack
- **Client:** React + Vite
- **Server:** Node.js + Express
- **Database:** PostgreSQL, diakses lewat Prisma ORM
- Monorepo dengan npm workspaces (`client/` dan `server/`)

### Struktur Folder
```
wedding-planner/
├── client/          # React + Vite (frontend)
├── server/          # Express + Prisma (backend & API)
└── package.json     # root workspaces + script gabungan
```

### Prasyarat
- Node.js >= 18
- PostgreSQL sudah berjalan (lokal atau remote) dan kamu punya connection string-nya

### Setup Awal
1. Install dependencies (root + semua workspace):
   ```bash
   npm install
   ```
2. Salin file env lalu isi sesuai environment kamu:
   ```bash
   cp server/.env.example server/.env
   cp client/.env.example client/.env
   ```
   - `server/.env` → isi `DATABASE_URL` dengan connection string PostgreSQL kamu.
   - `client/.env` → default sudah mengarah ke `http://localhost:4000/api`, ubah jika server jalan di alamat lain.
3. Jalankan migration Prisma untuk membuat tabel di database:
   ```bash
   npm run prisma:migrate
   ```

### Menjalankan Development
Jalankan client dan server sekaligus dari root:
```bash
npm run dev
```
- Client: http://localhost:5173
- Server: http://localhost:4000 (API di bawah `/api`)

Atau jalankan terpisah bila perlu: `npm run dev:client` / `npm run dev:server`.

### Data Source
- PostgreSQL, diakses via Prisma. Skema database ada di `server/prisma/schema.prisma`.
- Untuk melihat/mengubah data lewat GUI: `npm run prisma:studio`.

### Deployment
Karena sudah full-stack (butuh Node.js server + PostgreSQL), **GitHub Pages tidak bisa dipakai lagi** (Pages hanya serve file statis). Opsi deployment:
- **Client:** Vercel, Netlify, atau Cloudflare Pages (build output dari `npm run build --workspace client`)
- **Server + Database:** Railway, Render, Fly.io, atau VPS — semuanya menyediakan PostgreSQL terkelola.

### Next Steps
_(akan diisi kemudian — mis. autentikasi, fitur timeline & budget, deployment production)_

---

## English

A full-stack application for planning and tracking wedding preparations — checklist, timeline, and budget — with data persisted in a database.

### Tech Stack
- **Client:** React + Vite
- **Server:** Node.js + Express
- **Database:** PostgreSQL, accessed via Prisma ORM
- Monorepo using npm workspaces (`client/` and `server/`)

### Folder Structure
```
wedding-planner/
├── client/          # React + Vite (frontend)
├── server/          # Express + Prisma (backend & API)
└── package.json     # root workspaces + combined scripts
```

### Prerequisites
- Node.js >= 18
- A running PostgreSQL instance (local or remote) and its connection string

### Initial Setup
1. Install dependencies (root + all workspaces):
   ```bash
   npm install
   ```
2. Copy the env files and fill them in:
   ```bash
   cp server/.env.example server/.env
   cp client/.env.example client/.env
   ```
   - `server/.env` → set `DATABASE_URL` to your PostgreSQL connection string.
   - `client/.env` → defaults to `http://localhost:4000/api`, change if your server runs elsewhere.
3. Run Prisma migrations to create the database tables:
   ```bash
   npm run prisma:migrate
   ```

### Running in Development
Run both client and server from the root:
```bash
npm run dev
```
- Client: http://localhost:5173
- Server: http://localhost:4000 (API under `/api`)

Or run them separately: `npm run dev:client` / `npm run dev:server`.

### Data Source
- PostgreSQL, accessed via Prisma. Schema lives in `server/prisma/schema.prisma`.
- To browse/edit data via a GUI: `npm run prisma:studio`.

### Deployment
Since this is now full-stack (requires a Node.js server + PostgreSQL), **GitHub Pages can no longer be used** (Pages only serves static files). Deployment options:
- **Client:** Vercel, Netlify, or Cloudflare Pages (build output from `npm run build --workspace client`)
- **Server + Database:** Railway, Render, Fly.io, or a VPS — all offer managed PostgreSQL.

### Next Steps
_(to be filled later — e.g. authentication, timeline & budget features, production deployment)_
