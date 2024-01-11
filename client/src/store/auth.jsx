import { createContext, useContext, useEffect, useState } from 'react';
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [userlogin, setUserlogin] = useState('');

    const [menu, setMenu] = useState("")
    const [adminuser, setAdminuser] = useState("")
    const [adminContact, setAdminContact] = useState("")
    const [adminReservation, setAdminReservation] = useState("")





    let isLoggedIn = !!token;
    console.log('logged in ', isLoggedIn);
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken)

        return localStorage.setItem('token', serverToken);
    };

    // for the logout function
    const LogoutUser = () => {
        setToken('');
        return localStorage.removeItem('token');
    };

    // for receiving data from logged in user.

    const userAuthentication = async () => {
        try {
            const response = await fetch("https://mamaghar.netlify.app/api/auth/user", {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log('data', data.userData);
                setUserlogin(data.userData);
                // user.isAdmin
                // console.log(user);
            }

        } catch (error) {
            console.log('during loggedIn receing data error ', error);
        }
    };

    // ---------------------------for menu -------------


    const getMenu = async () => {
        try {
            const response = await fetch("https://mamaghar.netlify.app/api/data/menu", {
                method: "GET",
            })
            if (response.ok) {
                const data = await response.json();
                console.log('data', data.msg);
                setMenu(data.msg)
            }
            console.log("menu :", response);
        } catch (error) {
            console.log("menu error", error);
        }
    }
    // --------------------------------for admin user getting----------------
    const getUserToAdmin = async () => {
        try {
            const response = await fetch("https://mamaghar.netlify.app/api/admin/user", {
                method: "GET",
            })
            if (response.ok) {
                const data = await response.json();
                setAdminuser(data.msg)
            }
        } catch (error) {

            console.log("useradmin error", error);
        }
    }


    // ----------------------------------for admin contact getting----------
    const getContactToAdmin = async () => {
        try {
            const response = await fetch("https://mamaghar.netlify.app/api/admin/contact", {
                method: "GET",

            })
            if (response.ok) {
                const data = await response.json()
                setAdminContact(data)
            }
        } catch (error) {
            console.log("contactadmin error", error);
        }
    }

    //--------------------------------------for admin reservation getting-------------
    const getReservationAdmin = async () => {

        try {

            const response = await fetch('https://mamaghar.netlify.app/api/admin/reservation', {
                method: "GET",
            })
            if (response.ok) {
                const reservation_data = await response.json()
                setAdminReservation(reservation_data)
            }
        } catch (error) {
            console.log("Error from auth getreservation admin", error);
        }

    }



    useEffect(() => {
        getMenu()
        userAuthentication();
        getUserToAdmin()
        getContactToAdmin()
        getReservationAdmin()
    }, []);

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, storeTokenInLS, LogoutUser, userlogin, menu, adminuser, adminContact, adminReservation }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new error('wrap main with authprovider.');
    }
    return authContextValue;
};
