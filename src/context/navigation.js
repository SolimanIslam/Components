import { useState , createContext, useEffect} from "react";

const NavigationContext = createContext();

function NavigationProvider ({children}){

    const [currentPath , setCurrentPath] = useState(window.location.pathname);

    const navigateTo = (path)=>{
        window.history.pushState({},'',path);
        setCurrentPath(path);
    };

    useEffect(()=>{
        const handlePopState = ()=>{
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handlePopState);
        return ()=>{window.removeEventListener('popstate', handlePopState);}
    }, []);

    return <NavigationContext.Provider value={{currentPath, navigateTo}}>
        {children}
    </NavigationContext.Provider>
}



export {NavigationProvider};
export default NavigationContext;