import React, {useContext} from "react";
import {useToggleAlert} from "./alert/AlertContext";
// import {useToggleAlert} from "./app";
// import {useAlertToggle} from "./alert/AlertContext";
// import {AlertToggleContext} from "./app";

export default function Main() {

    // const toggle = useContext(AlertToggleContext);
    const toggle = useToggleAlert();
    // const toggle = useAlertToggle();

    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button onClick={toggle}>Показать alert</button>
        </>
    )
}
