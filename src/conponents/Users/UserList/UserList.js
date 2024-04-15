import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function UserList() {
    const navigator = useNavigate();

    useEffect(() => {
        axios.get("https://fb2d5e1a-0f61-45d4-8c95-ebda80c82c51.mock.pstmn.io/users")
        .then(response => {
            console.log(response);
        })
    }, [])

    const hanldeLogout = () => {
        localStorage.removeItem("token");
        navigator("/login")
    }

    return (
        <>
        <p>test git</p>
        User List
        <button onClick={hanldeLogout} type="button">Logout</button>
        </>
        
    )
}

export default UserList;