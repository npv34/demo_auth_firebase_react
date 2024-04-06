import { useFormik } from "formik";
import { FirebaseAuthProvider } from "@react-firebase/auth";

import {signInWithEmailAndPassword} from "firebase/auth";
// import {auth} from "../../config/config";
import { useNavigate } from "react-router";
import { config } from "../../config/config";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import LoginGoogle from "../Google/LoginGoogle";

function Login(params) {
    const navigator = useNavigate();
    const formLogin = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            // goi firebase login
            firebase.auth().signInWithEmailAndPassword(values.email, values.password)
            .then( res => {
                
                const token = res.user.multiFactor.user.accessToken;
               
                localStorage.setItem('token', token);
                navigator("/users")
            }).catch(err => {
                alert("Account not exist")
            })
        }
    })

    return (
        <>
        <FirebaseAuthProvider {...config} firebase={firebase}>
            <form onSubmit={formLogin.handleSubmit}>
                Email:
                <input type="email" name="email" onChange={formLogin.handleChange}/>
                Password:
                <input type="password" name="password" onChange={formLogin.handleChange}/>
                <button type="submit" >Login</button>
            </form>
            <LoginGoogle/>
        </FirebaseAuthProvider>
        
        </>
    )
}

export default Login;