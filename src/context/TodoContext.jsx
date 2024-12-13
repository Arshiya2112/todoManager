import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            setTodos(response.data);
            setLoading(false);
        })
        .catch((error) => console.error("Error fetching todos: ", error));
    }, []);

    const addTodo = async (newTodo) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
            setTodos([...todos, response.data]);
        } catch(error) {
            console.error("Error adding Todo : ", error);
        }
    };

    const updateTodo = async (id, updatedTodo) => {
        try {
            const response = await axios.patch(
                `https://jsonplaceholder.typicode.com/todos/${id}`,
                {
                    ...updatedTodo,
                    id,
                },
                {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                }
            );
            setTodos((prevTodos) => {
                return prevTodos.map((todo) => 
                todo.id === id ? { ...todo, ...updatedTodo } : todo
            );
            });
            console.log("Todo updated : ", response.data);
        } catch (error) {
            console.error("Error updating todo : ", error);
        }
    };

    return (
        <TodoContext.Provider value = {{ todos, loading, addTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
};