# nodejs-hw

Express + MongoDB додаток зі скиданням паролю через email та завантаженням аватара (HW10, гілка `05-mail-and-img`).

## Запуск локально

1. Скопіюй `.env.example` у `.env`.
2. Заповни `MONGO_URL` (як у попередніх ДЗ).
3. Створи акаунт на [Brevo](https://www.brevo.com) (або [SendGrid](https://sendgrid.com) як альтернативу) і заповни `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`.
4. Створи акаунт на [Cloudinary](https://cloudinary.com) і заповни `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`.
5. Придумай будь-який рядок для `JWT_SECRET`.
6. Встав адресу свого фронтенда (або будь-яку, наприклад `http://localhost:3001`) у `FRONTEND_DOMAIN`.
7. Встанови залежності та запусти сервер:

```bash
npm install
npm run dev
```

## Нові маршрути

| Метод | Шлях                        | Опис                                          |
| ----- | --------------------------- | ---------------------------------------------- |
| POST  | `/auth/request-reset-email` | надсилає лист зі скиданням паролю              |
| POST  | `/auth/reset-password`      | скидає пароль за JWT-токеном з листа           |
| PATCH | `/users/me/avatar`          | завантажує аватар (потребує авторизації)       |

`PATCH /users/me/avatar` очікує `multipart/form-data` з полем `avatar` (файл зображення, до 2MB).

## Деплой

Задеплоєно на [render.com](https://render.com) з гілки `05-mail-and-img`. У налаштуваннях сервісу додай **усі** змінні оточення з `.env.example`.
