import { createContext,useEffect,useState } from "react";
const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [globalData,setGlobalData] = useState({})

  
   

    useEffect(() => {
        localStorage.setItem("globalData", JSON.stringify(globalData))
    }, [globalData])

     // func adds data to our parent
    const updateGlobalData = (newData) => {
        // update properties if theres new data
        setGlobalData((prevData) => ({...prevData, ...newData}))
    }

    useEffect(() => {
        const savedData = localStorage.getItem("globalData");
        if(savedData) setGlobalData(JSON.parse(savedData));
    })



    return (
        <GlobalContext.Provider value={{ globalData,updateGlobalData }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
