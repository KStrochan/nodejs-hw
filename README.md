# nodejs-hw

Express + MongoDB (Mongoose) додаток для роботи з колекцією нотаток (HW07, гілка `02-mongodb`).

## Запуск локально

1. Створи кластер у [MongoDB Atlas](https://www.mongodb.com/atlas) і дозволь доступ з будь-якої IP-адреси (`0.0.0.0/0`) у Network Access.
2. Скопіюй `.env.example` у `.env` і встав свій рядок підключення у `MONGO_URL`.
3. Встанови залежності і запусти сервер:

```bash
npm install
npm run dev
```

При успішному підключенні в консолі зʼявиться:

```
✅ MongoDB connection established successfully
```

## Маршрути

| Метод  | Шлях             | Опис                        |
| ------ | ---------------- | --------------------------- |
| GET    | `/notes`         | отримати всі нотатки        |
| GET    | `/notes/:noteId` | отримати одну нотатку за ID |
| POST   | `/notes`         | створити нову нотатку       |
| PATCH  | `/notes/:noteId` | оновити нотатку за ID       |
| DELETE | `/notes/:noteId` | видалити нотатку за ID      |

Будь-який неіснуючий маршрут повертає `404` з `{ "message": "Route not found" }`.
Помилки на сервері повертають `{ "message": "<текст помилки>" }` з відповідним статусом.

## Модель Note

- `title` — обовʼязковий рядок
- `content` — необовʼязковий рядок (за замовчуванням порожній)
- `tag` — одне з: `Work, Personal, Meeting, Shopping, Ideas, Travel, Finance, Health, Important, Todo` (за замовчуванням `Todo`)
- `createdAt`, `updatedAt` — додаються автоматично

## Деплой

Задеплоєно на [render.com](https://render.com). У налаштуваннях сервісу на Render обов'язково додай змінні оточення `PORT` та `MONGO_URL`.
