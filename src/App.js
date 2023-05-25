import { Route, Routes } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import HomePage from "./Pages/Home/HomePage";


function App() {
  return (
    <div>
      <AppBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
