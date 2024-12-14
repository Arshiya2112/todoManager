# To-DO Manager

This is a To-Do List Manager built using React that allows users to add, edit and manage their todos efficiently. This application is designed with state management using Context API and styled using Tailwind CSS.

Features 
1. Add new todos with title and description
2. Edit existing todos' title, description and status
3. Mark todos as completed
4. Responsive design for seamless usage on all devices.

Tech Stack
1. Frontend : React
2. State Management : Context API
3. Styling : Tailwind CSS
4. Routing : React Router

Setup Instructions
1. Clone the repository - git clone https://github.com/Arshiya2112/todoManager.git
2. Navigate to project directory - cd todoManager
3. Install all dependencies - npm install
4. Start the development server - npm run dev


Note on API Behaviour
This application uses a fake API (https://jsonplaceholder.typicode.com/todos) for demonstration purposes. While adding todos works correctly and is reflected in the UI, data updates (updating todos) are successfully sent to server, but the changes are not reflected in the UI as the API does not persist data.

Context API
This application uses Context API for managing the to-do list state globally.

The file src/context/TodoContext.jsx contains 
1. State to store all todos
2. Functions to add, update todos
3. A TodoProvider component that wraps the app to provide context to all components

Adding a new todo -
1. Navigate to add todo page
2. Fill in the title and description
3. Click add todo to save the todo

Updating an existing todo -
1. Navigate to edit todo page by selecting a todo
2. Modify the title, description or completion status of the todo
3. Click update todo to save changes
