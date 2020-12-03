import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { isThisAdmin } from "../../api";
import userSvg from '../../Images/user.svg';
import { errorNF, successNF } from "../../Redux/Action/notificationsAction";
import { addCurrentUser } from "../../Redux/Action/UserInfoAction";
import firebaseConfig from "./Firebass.Config";
// import firebaseConfig from "./Firebase.config.js";

firebase.initializeApp(firebaseConfig);


const authContext = createContext()

const AuthContext = props => {
    const dispatch = useDispatch()
    const history = useHistory();
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState({})

    // common functions
    const setUser = (user,  setName) => {
        if (user) {
            // setCurrentUser({
            //     isLogin: true,
            //     name: user.displayName || setName,
            //     email: user.email,
            //     photo: user.photoURL || userSvg,
            //     isAdmin: false
            // })
            
            const adminEmail = async ()=>{
               const {data}= await isThisAdmin(user.email)
                const userInfo = {
                    isLogin: true,
                    name: user.displayName || setName,
                    email: user.email,
                    photo: user.photoURL || userSvg,
                    isAdmin: data
                }
                setCurrentUser(userInfo)
                props.addCurrentUser(userInfo)
                localStorage.setItem('currentUser',JSON.stringify(userInfo))
                dispatch(successNF(`${user.displayName || setName} welcome to Ema-John`))
                let { from } = location.state || { from: { pathname: "/" } }
                history.replace(from)
            }
            adminEmail()
            
        } else {
            setCurrentUser({})
            props.addCurrentUser({})
            localStorage.setItem('currentUser',JSON.stringify({}))
        }
    }

    const showError =(data)=>dispatch(errorNF(data))

    const callFirebaseWithProvider = (provider) => {
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log(result);
                const user = result.user;
                setUser(user)
            }).catch(error => {
                const errorMessage = error.message;
                showError(errorMessage)
                console.log(error)
            })
    }

    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({ displayName: name })
            .then(() => console.log('name update'))
            .catch(() => console.log('name not update'));
    }

    // function for interact with firebase
    const sineUpWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        callFirebaseWithProvider(provider)
    }
    const sineUpWithFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        callFirebaseWithProvider(provider)
    }

    const sineUpWithEmail = (name, email, password) => {
        console.log(name,email,password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                setUser(res.user, name)
                updateUserName(name)
            })
            .catch(error => {
                showError(error.message)
                console.log(error)
            })
    }
    const logInWithEmail = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                setUser(res.user)
            })
            .catch(error => {
                 showError(error.message)
                 console.log(error)
            })
    }
    const logOut = () => {
        firebase.auth().signOut()
            .then(function () {
               dispatch(errorNF(('You are successfully Log Out')))
                setUser()
                history.replace('/')
               
            }).catch(error => {
                showError(error.message)
            })
    }


    return (
        <authContext.Provider value={{ sineUpWithGoogle, sineUpWithFacebook, sineUpWithEmail, logInWithEmail, logOut, currentUser }}>
            {props.children}
        </authContext.Provider>
    );
};

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = {
    addCurrentUser,
    
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthContext);
export const useAuth = () => useContext(authContext)

