import React, {useState, useEffect, useRef, useMemo, useCallback, useContext} from 'react';
import './styles.css';
import './stylesS.scss';
import {AlertProvider} from "./alert/AlertContext";
import IMAGE from './react.jpg';
import {ClickCounter} from "./ClickCounter";
import Main from "./main";
import Alert from "./alert/Alert";


// export const AlertContext = React.createContext();
// export const AlertToggleContext = React.createContext();

// export const useAlert = () => {
//     return useContext(AlertContext);
// };

// export const useToggleAlert = () => {
//     return useContext(AlertToggleContext);
// };


export const App = () => {

    // const [alert, setAlert] = useState(false);

    // const toggle = () => setAlert(prev => !prev);

    return (<>
        <h1>
            React TS WEBPACK START TEMPLATE1 - {process.env.NODE_ENV} {process.env.name}  FFF
        </h1>
        <img src={IMAGE} alt="React logo" width='300' height='200'/>
        <ClickCounter/>

        {/*<AlertContext.Provider value={alert}>*/}
        {/*    <AlertToggleContext.Provider value={toggle}>*/}
        <AlertProvider>
            <div className={'container'}>
                <Alert/>
                <Main/>
            </div>
        </AlertProvider>
            {/*</AlertToggleContext.Provider>*/}
        {/*</AlertContext.Provider>*/}
    </>);
};
