import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
    return (
        <AppContext.Provider value={{

            isOpen, 
            setIsOpen
            
            }}>
            {children}
        </AppContext.Provider>
    );
}