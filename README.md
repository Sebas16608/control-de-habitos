# Backend API en TypeScript

Backend base desarrollado con **Node.js + TypeScript**, usando **Express** como framework y **Sequelize** como ORM. Pensado como proyecto de portafolio y base escalable para APIs reales.

## 🚀 Tecnologías

* Node.js
* TypeScript
* Express
* Sequelize ORM
* PostgreSQL / MySQL / SQLite
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
├── database/
│   ├── models/
│   ├── migrations/
│   └── sequelize.ts
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

````bash
npx tsc --init
```bash
npx tsc --init
````

Compilar:

```bash
npx tsc
```

## ▶️ Ejecutar en desarrollo

```bash
npm run dev
```

## 🔐 Autenticación

* Implementada con JWT
* Login y registro con Express
* Middleware para proteger rutas
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

## 🗄️ Modelos y Tablas (src/models)

### 👤 User

Representa a los usuarios del sistema.

Campos:

* id
* name
* email
* password
* createdAt
* updatedAt

Relaciones:

* Un User tiene muchos Habits
* Un User tiene muchos HabitLogs

---

### 📌 Habit

Representa un hábito creado por un usuario.

Campos:

* id
* userId
* title
* description (opcional)
* createdAt
* updatedAt

Relaciones:

* Pertenece a un User
* Tiene muchos HabitLogs

---

### ✅ HabitLog

Registro diario de cumplimiento de un hábito.

Campos:

* id
* habitId
* userId
* date
* completed
* createdAt

Relaciones:

* Pertenece a un Habit
* Pertenece a un User

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
