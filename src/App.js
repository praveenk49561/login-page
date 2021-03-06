import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Container/HomePage";
import LoginPage from './Container/LoginPage';
import TodoPage from "./Container/TodoPage";
import SignupPage from "./Container/SignupPage";
import UserDetailsPage from "./Container/UserDetailsPage";

function App() {
  return <div className="main-container">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/todo_list" element={<TodoPage />} />
          <Route path="/sign_up" element={<SignupPage />} />
          <Route path="/home_page" element={<HomePage />} />
          <Route path="/user_details/:id" element={<UserDetailsPage />} />
      </Routes>
  </BrowserRouter>
  </div>;
}

export default App;
