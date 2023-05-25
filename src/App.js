import { Route, Routes } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar/>}/>
      </Routes>
    </div>
  );
}

export default App;
