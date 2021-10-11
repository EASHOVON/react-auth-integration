import { useEffect, useState } from "react"
import initializeAuthenticaion from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut } from "firebase/auth";

initializeAuthenticaion();

const useFirebase = () =>
{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const signInUsingGoogle = () =>
    {
        signInWithPopup(auth, googleProvider)
            .then(result =>
            {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error =>
            {
                setError(error.message)
            })
    }
    // Something
    const signInUsingGithub = () =>
    {
        signInWithPopup(auth, githubProvider)
            .then(result =>
            {
                setUser(result.user);
            })
    }

    const logOut = () =>
    {
        signOut(auth)
            .then(() =>
            {
                setUser({});
            })
    }
    useEffect(() =>
    {
        onAuthStateChanged(auth, user =>
        {
            if (user)
            {
                console.log('inside state change', user);
                setUser(user);
            }
        })
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        signInUsingGithub
    }
}

export default useFirebase;