import React, { useContext } from 'react';
import home from '../../images/logo.png';
import './Login.css';
import {Link, useHistory, useLocation} from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';


if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}
const Login = () => {
    //App.js context api UserContext
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () =>{
        const provider = new firebase.auth.GoogleAuthProvider(); // firebase auth provider
        firebase.auth().signInWithPopup(provider)
        .then( res =>{
            const {displayName ,photoURL, email} = res.user;
            const signedInUser ={
                name : displayName,
                email : email,
            }
            setLoggedInUser(signedInUser)
            history.replace(from);
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div style={{background:'#E5E5E5', height:'100vh'}}>
            <div className="d-flex justify-content-center" style={{paddingTop:'50px'}}>
                <Link to='/home'><img width='300px' src={home} alt="home"/></Link>
            </div>

            <div className="login_area">
                <h2>Login With</h2>
                <button onClick={handleLogin}
                style={{width:'300px', margin:'15px 0'}} className="btn btn-info">
                     Continue with Google
                </button>
                <span> Don’t have an account? <Link to='/'> Create an account</Link></span>
            </div>
        </div>
    );
};

export default Login;