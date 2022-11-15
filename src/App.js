import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MyMap from "./my-map";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/*" element={<MyMap/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
