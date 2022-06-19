import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Container/LoginPage';
import TodoPage from "./Container/TodoPage";

function App() {
  return <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/todo_list" element={<TodoPage />} />
    </Routes>
  </BrowserRouter>
}

export default App;
