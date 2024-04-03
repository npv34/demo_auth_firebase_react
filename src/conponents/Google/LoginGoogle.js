import { FirebaseAuthProvider } from "@react-firebase/auth";
import { config } from "../../config/config";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect, useState } from "react";

function LoginGoogle(params) {

const [userLogin, setUserLogin] = useState({
    displayName: "",
    email: "",
    photoURL: ""
})


const hanldeLoginGoogle = async () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(googleAuthProvider);

    firebase.auth().onAuthStateChanged(user => {
        setUserLogin({...user, displayName: user.displayName, email: user.email, photoURL: user.photoURL})
        localStorage.setItem('user', userLogin);
    })
}

    return (
        <>
        <FirebaseAuthProvider {...config} firebase={firebase}>
            <button onClick={hanldeLoginGoogle}>Login with google</button>
        </FirebaseAuthProvider>
            
        </>
    )
}

export default LoginGoogle;