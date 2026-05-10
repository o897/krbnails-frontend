import { createContext, useEffect, useState } from "react";
const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const [globalData, setGlobalData] = useState(() => {
        const savedData = localStorage.getItem("globalData");
        return savedData ? JSON.parse(savedData) : {};
    })



    useEffect(() => {
        localStorage.setItem("globalData", JSON.stringify(globalData))
    }, [globalData])

    // func adds data to our parent
    const updateGlobalData = (newData) => {
        // update properties if theres new data
        setGlobalData((prevData) => ({ ...prevData, ...newData }))
    }






    return (
        <GlobalContext.Provider value={{ globalData, updateGlobalData }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
