# Backend API en TypeScript

Backend base desarrollado con **Node.js + TypeScript**, pensado como proyecto de portafolio y base escalable para APIs reales.

## 🚀 Tecnologías

* Node.js
* TypeScript
* Express (o Fastify)
* Prisma ORM
* PostgreSQL / SQLite
* JWT para autenticación

## 📁 Estructura del proyecto

```
├── src/
│   ├── index.ts
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middlewares/
│   └── utils/
├── prisma/
│   └── schema.prisma
├── dist/
├── tsconfig.json
├── package.json
└── README.md
```

## ⚙️ Instalación

```bash
npm install
```

## 🛠️ Configuración TypeScript

Inicializar configuración:

```bash
npx tsc --init
```

Compilar:

```bash
npx tsc
```

## ▶️ Ejecutar en desarrollo

```bash
npm run dev
```

## 🔐 Autenticación

* Registro y login con JWT
* Middleware de protección de rutas

## 📌 Endpoints principales

* `POST /auth/register`
* `POST /auth/login`
* `GET /profile`
* `POST /resource`
* `GET /resource`

## 🧠 Características

* Arquitectura modular
* Separación de lógica de negocio
* Tipado estricto
* Preparado para escalar

## 📦 Scripts útiles

```bash
npm run dev     # desarrollo
npm run build   # compilar TS
npm run start   # producción
```

## 📄 Licencia

MIT

---

Proyecto creado por **Sebas**
