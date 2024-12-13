import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //for routing
import { TodoProvider } from "./context/TodoContext"; //to manage the state of to-dos across the project
import AddToDo from "./pages/AddToDo"
import EditToDo from "./pages/EditToDo"
import Home from "./pages/Home"

const App = () => {
  return (
    <TodoProvider> 
      {/* Make the context accessible to all child components for centralized state management for to-dos */}
      
      <Router>
      {/* wrap the components that need access to route-based navigation */}

        <Routes>
        {/* defines all available routes */}
        
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<AddToDo/>}/>
          <Route path="/edit/:id" element={<EditToDo/>}/> 
          {/* route with dynamic parameter */}
        </Routes>
      </Router>
    </TodoProvider>
  );
};

export default App;