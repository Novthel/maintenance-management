import { createContext, useState } from 'react';


export const AppContext = createContext();

export default function UserProvider({ children }) {

    const [userSession, setUserSession ] = useState('admin');

    return (
        <AppContext.Provider value={ { userSession, setUserSession } }  >
            { children }
        </AppContext.Provider>
    )
}
