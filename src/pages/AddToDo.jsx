import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const AddToDo = () => { //renders a form to add a new to-do item

  const { addTodo } = useTodos(); //accessing from todos context

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => { //to handle form submission
    e.preventDefault(); //prevent default form submission behaviour

    const newTodo = {
      title,
      description,
      completed: false, //newly added to-dos are incomplete by default
    };

    addTodo(newTodo); //adding new todo to context
    navigate("/");
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-[#5109bc] p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          Add New To-Do
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-white font-medium">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="To-Do Title"
              className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none text-[#5109bc]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-white font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="To-Do Description"
              className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none text-[#5109bc]"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-[#5109bc] py-2 px-4 text-xl font-semibold rounded-md hover:bg-green-500 hover:text-white"
          >
            Add To-Do
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AddToDo;
