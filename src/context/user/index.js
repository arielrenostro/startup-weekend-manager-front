import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {sendOTP, verifyOTP} from '../../services/api';


const UserContext = createContext({
    userInfo: undefined,
    sendCode: (cellphone) => {},
    verifyCode: (code) => {},
    getUserInfo: () => {},
    logout: () => {}
});

const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(undefined)

    const sendCode = async (cellphone) => {
      const response = await sendOTP(cellphone);
      console.log(response)
    }

    const verifyCode = async (code) => {
        const response = await verifyOTP(code);
        console.log(response)

        AsyncStorage.setItem('token', 'save your token').then(() => {
            setUserInfo({
                name: 'dev-yakuza',
                email: 'dev.yakuza@gamil.com',
            });
        });  
    }

    const getUserInfo = () => {
        AsyncStorage.getItem('token')
            .then(value => {
                if (value) {
                    setUserInfo({
                        name: 'dev-yakuza',
                        email: 'dev.yakuza@gamil.com',
                    });
                }
            }).catch(() => {
                setUserInfo(undefined);
            });
    }

    useEffect(() => {getUserInfo()}, []);

    const logout = () => {
        // TODO Call remote app to logout.

        AsyncStorage.removeItem('token');
        setUserInfo(undefined);
    };

    return (
        <UserContext.Provider
            value={{
                userInfo,
                sendCode,
                verifyCode,
                getUserInfo,
                logout}}>
                    
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext};