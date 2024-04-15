import {Routes, Route, useNavigate} from "react-router-dom";
import Login from "./conponents/Login/Login";
import UserList from "./conponents/Users/UserList/UserList";
import { useEffect, useState } from "react";

const token = localStorage.getItem("token");
function App() {
  const navigator = useNavigate()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
      if(token) {
        
        setIsLogin(true);
        navigator("/users")
      } else {
        navigator("/login")
      }
  }, [])

  return (
    <div className="App">
      <h1>đây là nhánh mới</h1>
       <Routes>
          <Route path="/login" element={<Login/>}/>
          { isLogin && (
            <>
               <Route path="/users" element={<UserList/>}/>
            </>
          )}
          
       </Routes>
    </div>
  );
}

export default App;
