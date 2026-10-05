# NoteHub API

A REST API for a notes application built with Express and MongoDB (Mongoose). The project was developed step by step as part of the GoIT Full-Stack program, with each stage kept on its own branch.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white)
![Render](https://img.shields.io/badge/Deployed_on-Render-46E3B7?style=flat-square&logo=render&logoColor=white)

## 🔗 Links

- Live demo: https://kstrochan.github.io/nodejs-hw/
- Author: [Konstantyn Strochan](https://github.com/KStrochan)

## ✨ Features

- CRUD endpoints for a collection of notes stored in MongoDB.
- Note model built with Mongoose: required title, optional content and a tag from a fixed list.
- Automatic `createdAt` and `updatedAt` timestamps.
- Centralized error handling: unknown routes return a JSON 404, server errors return a JSON message with the proper status.
- Request logging with pino-http, CORS support and configuration through environment variables.

## 🌿 Branches

Each homework stage lives in its own branch:

- `01-express` – Express server basics.
- `02-mongodb` (also `main`) – CRUD API for notes with MongoDB and Mongoose.
- `03-validation` – request validation with celebrate (Joi).
- `04-auth` – user registration and login, password hashing with bcrypt, session cookies and private notes.
- `05-mail-and-img` – next iteration of the project (mail and image handling).

## 📡 API Endpoints

| Method | Path | Description |
| ------ | ---- | ----------- |
| GET | `/notes` | Get all notes |
| GET | `/notes/:noteId` | Get a single note by ID |
| POST | `/notes` | Create a new note |
| PATCH | `/notes/:noteId` | Update a note by ID |
| DELETE | `/notes/:noteId` | Delete a note by ID |

Any unknown route returns `404` with `{ "message": "Route not found" }`. Server errors return `{ "message": "<error text>" }` with the corresponding status code.

### Note model

| Field | Type | Notes |
| ----- | ---- | ----- |
| `title` | String | Required |
| `content` | String | Optional, empty string by default |
| `tag` | String | One of: Work, Personal, Meeting, Shopping, Ideas, Travel, Finance, Health, Important, Todo (default: Todo) |
| `createdAt`, `updatedAt` | Date | Added automatically |

## 🛠️ Tech Stack

- **Runtime and framework:** Node.js (ES modules), Express 4
- **Database:** MongoDB Atlas, Mongoose
- **Tooling:** pino-http, dotenv, http-errors, cors, ESLint, Prettier, nodemon
- **Deployment:** Render

## 🚀 Getting Started

1. Create a MongoDB Atlas cluster and allow access from your IP address in **Network Access**.
2. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/KStrochan/nodejs-hw.git
   cd nodejs-hw
   npm install
   ```

3. Copy `.env.example` to `.env` and set your connection string in `MONGO_URL`.
4. Start the development server:

   ```bash
   npm run dev
   ```

   After a successful connection the console prints `MongoDB connection established successfully`.

## ☁️ Deployment

The API is deployed on [Render](https://render.com/). Add the `PORT` and `MONGO_URL` environment variables in the service settings.

## 👤 Author

Konstantyn Strochan – Junior Full-Stack Developer. [LinkedIn](https://www.linkedin.com/in/konstantyn-strochan/) | [GitHub](https://github.com/KStrochan)
