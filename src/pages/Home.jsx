import { Link } from "react-router-dom";
import { useTodos } from "../context/TodoContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const { todos, loading } = useTodos(); //fetch from the context

  console.log("Rendering Home - Todos:", todos); //for debugging

  if (loading) //while fetching todos, loading text is displayed
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );

  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="container mx-auto px-8 py-20 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">All Todos</h1>
          <Link
            to="/add"
            className=" mt-4 sm:mt-0 px-4 py-2 bg-[#5109bc] text-white rounded-md hover:bg-green-500 hover:scale-105 transition-transform"
          >
            Add New To-Do
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-gray-200 shadow-md rounded-lg">
            {/* table for displaying all todos in a table-like structure */}
            <thead className="text-white bg-[#5109bc] text-lg sm:text-md">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
                {/* map through todos array to generate rows */}
              {todos.map((todo, index) => (
                <tr
                  key={todo.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
                  }`}
                >
                  <td className="px-4 py-2 text-[#5109bc]">{index + 1}.</td>
                  <td className="px-4 py-2 text-[#5109bc]">{todo.title}</td>
                  <td className="px-4 py-2 text-[#5109bc]">{todo.description}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        todo.completed
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {todo.completed ? "Completed" : "Pending"}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/edit/${todo.id}`}
                      className="px-4 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
