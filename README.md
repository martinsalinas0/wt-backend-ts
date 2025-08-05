# Work Together — Backend

This is the **backend** for the **Work Together** job collaboration platform, built using Node.js, Express, and MongoDB. It exposes a RESTful API for job listings, authentication, and user management.

## 🚀 Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- TypeScript
- dotenv, bcryptjs, cors

## 📦 Installation

```bash
git clone https://github.com/martinsalinas0/wt-backend-ts.git
cd wt-backend-ts
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## 🧪 Running Locally

```bash
npm run dev
```

Server will run on `http://localhost:5000`.

## 🗂️ Project Structure

```
wt-backend-ts/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── app.ts
├── server.ts
```

## ✨ Features

- User registration/login
- Job CRUD operations
- JWT authentication
- Mongoose data modeling

## 🚀 Deployment

- Deploy to Render, Railway, or similar.
- Set environment variables securely.

## 🧾 License

MIT License

## 👤 Author

[martinsalinas0](https://github.com/martinsalinas0)
