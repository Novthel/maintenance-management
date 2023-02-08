import { createContext, useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

export const AppContext = createContext();

export default function UserProvider({ children }) {
    const [role, setRole ] = useState(null);
    const [id, setId ] = useState(null);
    const [username, setUsername ] = useState(null)
    const [name, setName] = useState(null);
    const [lastname, setLastName] = useState(null);
    
    const DecodedToken = ()=> {
        try {
            if(localStorage.getItem('token')){
                const token = localStorage.getItem('token')
                const payload = jwt_decode(token)
                setRole(payload.role)
                setUsername(payload.username)
                setLastName(payload.lastnames)
                setName(payload.names)
                setId(payload.id)
            }
        } catch (error) {
            console.log(error)
        }     
    }

    useEffect(()=>{
        DecodedToken()
    },[role])
  
   
    return (
        <AppContext.Provider value={ { role, username, DecodedToken, name, lastname, id } }  >
            { children }
        </AppContext.Provider>
    )
}
