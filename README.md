Sure! Here's the revised `README.md` file with only file mentions and emojis:

```markdown
# Task Management System

This is a Task Management System developed using React and Redux for the frontend, with a Node.js backend. The system allows users to manage their tasks with features like creating, editing, deleting, and viewing tasks.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Redux Setup](#redux-setup)
- [Code Examples](#code-examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

```sh
git clone https://github.com/sachinpandeygurh/Task-Management-System-MB.git
```

2. Navigate to the project directory:

```sh
cd Task-Management-System-MB
```

3. Install the dependencies:

```sh
npm install
```

## Usage

1. Start the development server:

```sh
npm start
```

2. Open your browser and navigate to `http://localhost:3000`.

## Features

- 🛠️ User authentication with signup and signin.
- 📋 Task management including adding, editing, and deleting tasks.
- 🔗 Integration with backend APIs.
- 📱 Responsive design using Bootstrap.

## Folder Structure

```plaintext
Redux/
|-- actions.js
|-- reducers.js
|-- store.js
|-- types.js
src/
|-- components/
|   |-- AddTaskModal.js
|   |-- EditTaskModal.js
|-- layout/
|   |-- Header.js
|-- pages/
|   |-- Home.js
|   |-- Signin.js
|   |-- Signup.js
|-- App.js
|-- index.js
```

## Dependencies

- React
- Redux
- React-Redux
- Redux-Thunk
- React-Bootstrap
- React-Router-Dom
- Axios
- React-Toastify

## Redux Setup

### `src/Redux/actions.js`

- `fetchTasks`
- `deleteTask`
- `updateTask`

### `src/Redux/reducers.js`

- `FETCH_TASKS_SUCCESS`
- `DELETE_TASK_SUCCESS`
- `UPDATE_TASK_SUCCESS`

### `src/Redux/store.js`

- `thunk`
- `rootReducer`

### `src/Redux/types.js`

- `FETCH_TASKS_SUCCESS`
- `DELETE_TASK_SUCCESS`
- `UPDATE_TASK_SUCCESS`

## Code Examples

### Header Component

- `Header.js`

### App Component

- `App.js`

### Task Adding Button

- `AddTaskModal.js`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, enhancements, or features.

## License

This project is licensed under the MIT License.
