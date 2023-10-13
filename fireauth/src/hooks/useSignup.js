import { useState } from "react"
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
    // 에러정보를 관리합니다.
    const [error, setError] = useState(null);

    // 통신 상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);

    const signup = (email, password, displayName) => {

        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
                console.error(error);
            });
    }
}