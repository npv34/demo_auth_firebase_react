import axios from "axios";
import { useEffect } from "react";

function UserList(params) {

    useEffect(() => {
        axios.get("https://fb2d5e1a-0f61-45d4-8c95-ebda80c82c51.mock.pstmn.io/users")
        .then(response => {
            console.log(response);
        })
    }, [])

    return (
        <>User List</>
    )
}

export default UserList;