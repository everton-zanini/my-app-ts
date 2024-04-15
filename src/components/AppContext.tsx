import { createContext, useState } from "react";

interface IAppContext {
    user: string,
    isLoggedIn:boolean,
    setIsloggedIn: (isLoggedIn:boolean) => void
  }
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn,setIsloggedIn] = useState<boolean>(false);
    const user = 'Zanini'
    return (
      <AppContext.Provider value={{ user,isLoggedIn,setIsloggedIn}}>
        {children}
      </AppContext.Provider>
    )
} 