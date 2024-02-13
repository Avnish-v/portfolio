import { useContext ,  createContext, useState } from "react";

const Mycontext = createContext();

export const Myprovider =({children})=>{
    const [mode ,setMode] = useState(false);
const sharedData = {
mode , 
setMode
}
return(
    <Mycontext.Provider value={sharedData}>{children}</Mycontext.Provider>
)
}
export const useContextData  = ()=>useContext(Mycontext);
