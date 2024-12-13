import { useParams, useNavigate } from "react-router-dom";
import { useTodos } from "../context/TodoContext";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const EditToDo = () => {
  const { todos, updateTodo } = useTodos();
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description || "");
      setCompleted(todo.completed);
    }
  }, [todos, id]);

  console.log("Rendering EditToDo - Title:", title, "Description:", description, "Completed:", completed);


  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodo = {
      title,
      description,
      completed,
    };
    updateTodo(id, updatedTodo);
    navigate("/");
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[#5109bc] p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Edit To-Do
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
              className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-[#5109bc] focus:outline-none text-[#5109bc]"
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
              className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-[#5109bc] focus:outline-none text-[#5109bc]"
              rows="4"
            ></textarea>
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="completed"
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="w-5 h-5 text-white border-black rounded focus:ring-2 focus:ring-[#5109bc]"
            />
            <label
              htmlFor="completed"
              className="text-white font-medium select-none"
            >
              Completed
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-xl text-[#5109bc] py-2 px-4 rounded-md hover:bg-green-500 hover:text-white"
          >
            Update To-Do
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EditToDo;
