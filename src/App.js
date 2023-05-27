import { Route, Routes } from "react-router-dom";
import AppBar from "./Components/UserNav/AppBar";
import HomePage from "./Pages/Home/HomePage";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import LoginForm from "./Components/LoginForm/LoginForm";


function App() {
  return (
    <div>
      <AppBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="login" element={<LoginForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
