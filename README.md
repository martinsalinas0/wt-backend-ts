# wt-backend-ts

Backend API built with TypeScript, Express, MongoDB, and Passport.js for authentication.

---

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

Clone the repository and install dependencies:

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
Or build and start the production server:

bash
Copy
Edit
npm run build
npm start
The server will run at http://localhost:<PORT> (default is 8000).

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

License
ISC License

vbnet
Copy
Edit

Replace `<your-repo-url>`, `<your-mongodb-connection-string>`, and `<your-jwt-secret>` with your actual values.

```
