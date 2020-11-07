import React, { createContext, useContext, useState, useEffect } from "react";
import userSvg from '../../Images/user.svg'
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { firebaseConfig } from "./Firebase.config";
// import { usePopup } from "../Notification/PopupContext";
import { Redirect, Route, useHistory, useLocation } from "react-router-dom";
firebase.initializeApp(firebaseConfig);


const authContext = createContext()

const AuthContext = props => {
    const history = useHistory();
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState({})
    // const { showPupUpWithData } = usePopup()

    // common functions
    const setUser = (user, setName) => {
        if (user) {
            setCurrentUser({
                isLogin: true,
                name: user.displayName || setName,
                email: user.email,
                photo: user.photoURL || userSvg
            })
            // showPupUpWithData(`${user.displayName || setName} welcome to Ema-John`)
            let { from } = location.state || { from: { pathname: "/login" } }
            history.replace(from)

        } else {
            setCurrentUser({})
        }
    }

    const callFirebaseWithProvider = (provider) => {
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const token = result.credential.accessToken;
                const user = result.user;
                setUser(user)
            }).catch(error => {
                const errorMessage = error.message;
                // showPupUpWithData(errorMessage, 'error')
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
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                setUser(res.user, name)
                updateUserName(name)
            })
            .catch(error => {
                // showPupUpWithData(error.message, 'error')
            })
    }
    const logInWithEmail = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                setUser(res.user)
            })
            .catch(error => {
                // showPupUpWithData(error.message, 'error')
            })
    }
    const logOut = () => {
        firebase.auth().signOut()
            .then(function () {
                // showPupUpWithData('You are successfully Log Out')
                setCurrentUser({})
            }).catch(error => {
                // showPupUpWithData(error.message, 'error')
            })
    }


    return (
        <authContext.Provider value={{ sineUpWithGoogle, sineUpWithFacebook, sineUpWithEmail, logInWithEmail, logOut, currentUser }}>
            {props.children}
        </authContext.Provider>
    );
};
export default AuthContext;
export const useAuth = () => useContext(authContext)

export const PrivateRoute = ({ children, ...rest }) => {
    const { currentUser } = useAuth()

    return (
        <Route
            {...rest}
            render={({ location }) =>
                currentUser.isLogin ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}