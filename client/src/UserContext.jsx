import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext({});
//Context, in React, is a way to pass data down through a component tree without having to pass props down through every level
export function UserContextProvider({children}) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    axios.get('/profile').then(response => {
      setId(response.data.userId);
      setUsername(response.data.username);
    });
  }, []);
  return (
    <UserContext.Provider value={{username, setUsername, id, setId}}>
      {children}
    </UserContext.Provider>
  );
}