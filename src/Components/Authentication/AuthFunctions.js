import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import { connect } from "react-redux";
// import { usePopup } from "../Notification/PopupContext";
import { useHistory, useLocation } from "react-router-dom";
import { isThisAdmin } from "../../api";
import userSvg from '../../Images/user.svg';
import { addCurrentUser } from "../../Redux/Action/UserInfoAction";
import { firebaseConfig } from "./Firebase.config";

firebase.initializeApp(firebaseConfig);


const authContext = createContext()

const AuthContext = props => {
    const history = useHistory();
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState({})

    // common functions
    const setUser = (user,token , setName) => {
        if (user) {
            setCurrentUser({
                isLogin: true,
                name: user.displayName || setName,
                email: user.email,
                photo: user.photoURL || userSvg,
                token:token,
                isAdmin: false
            })
            
            const adminEmail = async ()=>{
               const {data}= await isThisAdmin(user.email)
                const userInfo = {
                    isLogin: true,
                    name: user.displayName || setName,
                    email: user.email,
                    photo: user.photoURL || userSvg,
                    token:token,
                    isAdmin: data
                }
                setCurrentUser(userInfo)
                props.addCurrentUser(userInfo)
                localStorage.setItem('currentUser',JSON.stringify(userInfo))
                // showPupUpWithData(`${user.displayName || setName} welcome to Ema-John`)
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

    const callFirebaseWithProvider = (provider) => {
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log(result);
                const token = result.credential.accessToken;
                const user = result.user;
                setUser(user,token)
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
                const token = res.credential.accessToken;
                setUser(res.user,token, name)
                updateUserName(name)
            })
            .catch(error => {
                // showPupUpWithData(error.message, 'error')
            })
    }
    const logInWithEmail = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                const token = res.credential.accessToken;
                setUser(res.user,token)
            })
            .catch(error => {
                // showPupUpWithData(error.message, 'error')
            })
    }
    const logOut = () => {
        firebase.auth().signOut()
            .then(function () {
                // showPupUpWithData('You are successfully Log Out')
                setUser()
                history.replace('/')
               
            }).catch(error => {
                // showPupUpWithData(error.message, 'error')
            })
    }

   

    console.log('current user in auth funetion ',currentUser );

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

