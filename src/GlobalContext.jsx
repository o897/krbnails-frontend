import { createContext,useState } from "react";

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
    const [formData,setFormData] = useState({})

    // func adds data to our parent
    const updateFormData = (newData) => {
        // update properties if theres new data
        setFormData((prevData) => ({...prevData, ...newData}))
    }

    return (
        <GlobalContext.Provider value={{ formData,updateFormData }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
