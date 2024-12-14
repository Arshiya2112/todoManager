# To-DO Manager

This is a To-Do List Manager built using React that allows users to add, edit and manage their todos efficiently. This application is designed with state management using Context API and styled using Tailwind CSS.

Features 
-> Add new todos with title and description
-> Edit existing todos' title, description and status
-> Mark todos as completed
-> Responsive design for seamless usage on all devices.

Tech Stack
Frontend : React
State Management : Context API
Styling : Tailwind CSS
Routing : React Router

Setup Instructions
-> Clone the repository - git clone https://github.com/Arshiya2112/todoManager.git
-> Navigate to project directory - cd todoManager
-> Install all dependencies - npm install
-> Start the development server - npm run dev


Note on API Behaviour
This application uses a fake API (https://jsonplaceholder.typicode.com/todos) for demonstration purposes. While adding todos works correctly and is reflected in the UI, data updates (updating todos) are successfully sent to server, but the changes are not reflected in the UI as the API does not persist data.

Context API
This application uses Context API for managing the to-do list state globally.

The file src/context/TodoContext.jsx contains 
-> state to store all todos
-> functions to add, update todos
-> a TodoProvider component that wraps the app to provide context to all components

Adding a new todo -
-> navigate to add todo page 
-> fill in the title and description
-> click add todo to save the todo

Updating an existing todo -
-> navigate to edit todo page by selecting a todo
-> modify the title, description or completion status of the todo
-> click update todo to save changes