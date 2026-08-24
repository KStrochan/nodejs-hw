# nodejs-hw

Express-додаток для роботи з колекцією нотаток (HW06, гілка `01-express`).

## Запуск локально

```bash
npm install
npm run dev
```

Сервер стартує на порті зі змінної оточення `PORT` (за замовчуванням `3000`).

## Маршрути

- `GET /notes` — повертає `{ "message": "Retrieved all notes" }`
- `GET /notes/:noteId` — повертає `{ "message": "Retrieved note with ID: <id>" }`
- `GET /test-error` — навмисно кидає помилку для перевірки обробника 500

Будь-який неіснуючий маршрут повертає `404` з `{ "message": "Route not found" }`.

## Деплой

Задеплоєно на [render.com](https://render.com). Не забудьте додати змінну оточення `PORT` у налаштуваннях сервісу на Render.
