import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});


export const AuthContextProvider = (props) => {
    
// That below could all be cleared
    const [isLoggedIn, setIsLoggedIn] = useState();


    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem('isLoggedIn');

        if (isUserLoggedIn === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

// up to here, because it is moved to the auth-context

    return <AuthContextProvider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>{props.children}</AuthContextProvider>
}


export default AuthContext;