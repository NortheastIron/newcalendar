import React, {useContext, useState} from "react";

export const AlertContext = React.createContext();
export const AlertToggleContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

export const useToggleAlert = () => {
    return useContext(AlertToggleContext);
};

export const AlertProvider = ({ children }) => {

    // console.log('child', children);
    const [alert, setAlert] = useState(false);
//     const toggle = () => setAlert(prev => !prev);
//
    return (
        <>
            <AlertContext.provider value={alert}>
             {/*<AlertToggleContext.provider value={toggle}>*/}
                { children }
             {/*</AlertToggleContext.provider>*/}
            </AlertContext.provider>
        </>
    );
};
