import { useContext ,  createContext, useState } from "react";

const Mycontext = createContext();

export const Myprovider =({children})=>{
    function gettheSystemTheme(){
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            return true;
        } 
        return false;
    }
    const [mode ,setMode] = useState(gettheSystemTheme());
const sharedData = {
mode , 
setMode
}
return(
    <Mycontext.Provider value={sharedData}>{children}</Mycontext.Provider>
)
}
export const useContextData  = ()=>useContext(Mycontext);
