import React, { createContext, useEffect, useState } from 'react';
import app from './App';
import { getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { onAuthStateChanged, } from 'firebase/auth'


const auth = getAuth(app)
export const authContext = createContext(auth)
const Contex = ({ children }) => {
    const [user, setUser] =useState([])
    const GoogleSignIn = (Provider) => {
        return signInWithPopup(auth, Provider)
    }
    const signOuts =() =>{
        return signOut(auth)
     }

     const signUps =(email, password) =>{
       return createUserWithEmailAndPassword(auth, email , password)
     }
     const signINs =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
     }
     const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:photoURL
        });
    }

    useEffect(() => {
        const Unsubscrib = onAuthStateChanged(auth, currentUser => {
            return setUser(currentUser)
        })
       
        return () => { Unsubscrib() }
    }, [])

    const DataProvider = { GoogleSignIn, user , signOuts, signINs, updateUserProfile , signUps}
    return (
        <authContext.Provider value={DataProvider}>
            {children}
        </authContext.Provider>
    );
};

export default Contex;