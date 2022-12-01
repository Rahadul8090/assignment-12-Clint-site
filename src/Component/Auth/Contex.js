import React, { createContext, useEffect, useState } from 'react';
 import { getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { onAuthStateChanged, } from 'firebase/auth'
import app from '../../fervais.config';


const auth = getAuth(app)
export const authContext = createContext(auth)
const Contex = ({ children }) => {
    const [loading , setLoading] = useState(true)
    const [user, setUser] =useState([])
    const GoogleSignIn = (Provider) => {
        return signInWithPopup(auth, Provider)
    }
    const signOuts =() =>{
        return signOut(auth)
     }

     const signUps =(email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email , password)
     }
     const signINs =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }
     const updateUserProfile = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:photoURL
        });
    }

    useEffect(() => {
        const Unsubscrib = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            return setUser(currentUser)
        })
       
        return () => { Unsubscrib() }
    }, [])

    const DataProvider = { GoogleSignIn, user , signOuts, signINs, updateUserProfile , signUps,loading}
    return (
        <authContext.Provider value={DataProvider}>
            {children}
        </authContext.Provider>
    );
};

export default Contex;