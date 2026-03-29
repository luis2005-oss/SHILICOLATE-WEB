import { createContext, useState } from "react";

//crear contexto
const UserContext = createContext(null)
//definir provider
function UserProvider ({children}) {
    const [user, setUser] = useState('')

    const value = {user, setUser}
}