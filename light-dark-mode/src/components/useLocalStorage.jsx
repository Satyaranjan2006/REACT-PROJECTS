
// -------------------- this is a custom hook where we create a local storage and store outr theme in it -------------------- 
import { useState } from "react";
export default function useLocalStorage(key,defaultValue){
    const [value, setValue] = useState(()=>{
        let currentValue;

        try {
            currentValue=JSON.parse(localStorage.getItem(key) || String(defaultValue))
        } catch (error) {
            console.log(error);
            currentValue=defaultValue
            
        }
        return currentValue
    })

    useEffect(() => {
     localStorage.setItem(key,JSON.stringify(value))
    }, [key,value])

    return [value,setValue]
    
}