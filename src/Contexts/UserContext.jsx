import { createContext, useState, useEffect } from 'react'
import { createUserDocumentFromAuth, onAuthStateChangedListener} from '../Utils/Firebase/Firebase.utils'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser: currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {    
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
            console.log(user);
        })

        return unsubscribe
    }, [])

    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}