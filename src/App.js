import {Routes, Route} from "react-router-dom";
import Login from "./conponents/Login/Login";
import UserList from "./conponents/Users/UserList/UserList";

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/users" element={<UserList/>}/>
       </Routes>
    </div>
  );
}

export default App;
