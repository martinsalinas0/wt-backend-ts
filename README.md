<<<<<<< HEAD
# Work Together — Backend

This is the **backend** for the **Work Together** job collaboration platform, built using Node.js, Express, and MongoDB. It exposes a RESTful API for job listings, authentication, and user management.
=======
# work Together Backend

Backend API built with TypeScript, Express, NodeJS, MongoDB, and Passport.js for authentication.
>>>>>>> b7df840d547f866a82055b081268497ece2e2ee6

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

<<<<<<< HEAD
## 🗂️ Project Structure
=======
API Endpoints
Home
GET /api/home
Returns a basic welcome message.

Authentication
Routes under /api/auth
Handles user registration, login, logout, and related authentication tasks.

Users
Routes under /api
Manage user profiles and related operations.

Jobs
Routes under /api/jobs
Create, read, update, and delete job postings.

Testing
This project uses Jest for testing with TypeScript support via ts-jest.

Run all tests:

bash
Copy
Edit
npm test
Technologies Used
Node.js & Express

TypeScript

MongoDB & Mongoose

Passport.js (with JWT strategy)

bcrypt

cors

dotenv

Jest & ts-jest

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

#License
ISC License

vbnet
Copy
Edit

Replace `<your-repo-url>`, `<your-mongodb-connection-string>`, and `<your-jwt-secret>` with your actual values.
>>>>>>> b7df840d547f866a82055b081268497ece2e2ee6

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
