import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  
    </div>
  );
}

export default App;
