
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { TodoProvider } from "./context/TodoContext"
import AddToDo from "./pages/AddToDo"
import EditToDo from "./pages/EditToDo"
import Home from "./pages/Home"

const App = () => {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<AddToDo/>}/>
          <Route path="/edit/:id" element={<EditToDo/>}/>
        </Routes>
      </Router>
    </TodoProvider>
  );
};

export default App;