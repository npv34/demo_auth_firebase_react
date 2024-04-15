import { FirebaseAuthProvider } from "@react-firebase/auth";
import { config } from "../../config/config";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function LoginGoogle(params) {
const navigator = useNavigate();
const [userLogin, setUserLogin] = useState({
    displayName: "",
    email: "",
    photoURL: ""
})

const hanldeLoginGoogle = async () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(googleAuthProvider);

    firebase.auth().onAuthStateChanged(res => {
        //setUserLogin({...user, displayName: user.displayName, email: user.email, photoURL: user.photoURL})
        const token = res.multiFactor.user.accessToken;
        localStorage.setItem('token', token);
        navigator("/users")
    })
}

    return (
        <>
            <p>Test git</p>
            <button onClick={hanldeLoginGoogle}>Login with google</button>
        </>
    )
}

export default LoginGoogle;