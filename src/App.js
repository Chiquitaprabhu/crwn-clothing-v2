
import Home from "./component/routes/home/home.component";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
       <Route path='/home' element={<Home/>}/>
    </Routes>
  );
};

export default App;
