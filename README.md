# Team Task Manager

A Node.js backend for managing team tasks with authentication.

## Setup

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd team-task-manager
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables in `backend/.env`:
   ```
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   PORT=5000
   ```

4. Start the server:
   ```
   cd backend
   npm run dev
   ```

The server will run on http://localhost:5000.

## API Endpoints

- GET / : Check if API is running
- POST /api/auth/signup : Register a new user
- POST /api/auth/login : Login and get JWT token

## Project Structure

- backend/: Main application code
  - index.js: Entry point
  - models/: Mongoose models (User, Project, Task)
  - routes/: API routes (auth)
  - middleware/: Authentication middleware
- frontend/: (Not implemented yet)
- controller/: (Not implemented yet)

## Technologies

- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing