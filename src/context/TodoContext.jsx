import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

const TodoContext = createContext(); //creating a context for To-Do management

export const useTodos = () => useContext(TodoContext); //custom hook defined to use the To-Do context 

export const TodoProvider = ({ children }) => { //provider component to manage the To-Do state and logic

    const [todos, setTodos] = useState([]); //state to store the list of todos
    const [loading, setLoading] = useState(true); //state to track if data is being loaded

    useEffect(() => { //fetching initial data from the API when the component mounts
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            setTodos(response.data); //updating state with fetched todos
            setLoading(false);
        })
        .catch((error) => console.error("Error fetching todos: ", error)); //handling errors in fetching
    }, []); //empty dependency array to ensure this runs only once on mount

    const addTodo = async (newTodo) => { //function to add a new todo
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo); //post request to the API with the new todo data
            setTodos([...todos, response.data]); //adding new todo to current state
        } catch(error) {
            console.error("Error adding Todo : ", error); //handling errors during adding todo
        }
    };

    const updateTodo = async (id, updatedTodo) => { //function to update an existing todo
        try {
            const response = await axios.patch( //patch request to the API to update specific todo
                `https://jsonplaceholder.typicode.com/todos/${id}`, //endpoint with specific todo ID
                {
                    ...updatedTodo, //updated data
                    id, //ensuring the ID remains same
                },
                {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                }
            );
            setTodos((prevTodos) => { //updating state by replacing old todo with updated one
                return prevTodos.map((todo) => 
                todo.id === id ? { ...todo, ...updatedTodo } : todo
            );
            });
            console.log("Todo updated : ", response.data); //for debugging
        } catch (error) {
            console.error("Error updating todo : ", error); //handling errors in updating todo
        }
    };

    return ( //providing todos, loading state, functions to context consumers
        <TodoContext.Provider value = {{ todos, loading, addTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
};