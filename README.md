# Task Management System - MB

This repository contains a Task Management System built with React, Redux, Node.js, Express, and MongoDB. The system allows users to manage tasks effectively with features such as task creation, updating, and deletion.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

✨ **User Authentication**: Secure user registration and login functionality.  
✨ **Task Management**: Create, update, and delete tasks with ease.  
✨ **Responsive Design**: Mobile-friendly user interface.  
✨ **Notifications**: Real-time feedback with toast notifications.

## Technologies Used

### Frontend
- React
- Redux
- React-Router
- Bootstrap
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs

## Project Structure

### Frontend
```
frontend/
├── public/
├── src/
│   ├── layout/
│   │   ├── Header.js
│   ├── components/
│   │   ├── addTaskModal.js
│   │   ├── editTask.js
│   │   ├── userTable.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Signin.js
│   │   ├── Signup.js
│   ├── Redux/
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   ├── store.js
│   │   ├── types.js
│   ├── App.js
│   ├── index.js
├── package.json

```

### Backend
```
backend/
├── controllers/
│   ├── authController.js
│   ├── taskController.js
├── models/
│   ├── UserModel.js
│   ├── TaskModel.js
├── routes/
│   ├── userRoutes.js
│   ├── taskRoutes.js
├── middleware/
│   ├── authMiddleware.js
├── config/
│   ├── db.js
├── server.js
├── package.json

```

## Frontend Setup

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sachinpandeygurh/Task-Management-System-MB.git
   ```

2. Navigate to the frontend directory:

   ```bash
   cd Task-Management-System-MB
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Backend Setup

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Navigate to the backend directory:

   ```bash
   cd Task-Management-System-MB/backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add your MongoDB URI and JWT secret:

   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

## Usage

1. Register a new user or login with existing credentials.
2. Create, update, and delete tasks from the dashboard.
3. View task details and manage your tasks efficiently.

## Screenshots

📸 **Login Page**  
📸 **Dashboard**  
📸 **Task Management**

## Contributing

🤝 Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact

For any inquiries or feedback, please reach out to me:

- [LinkedIn](https://www.linkedin.com/in/sachinpandeygurh)
- Visit my [portfolio](https://sachinpandeyportfolio.netlify.app)

Thank you for using our Task Management System! We hope it helps you stay organized and productive. ✨
