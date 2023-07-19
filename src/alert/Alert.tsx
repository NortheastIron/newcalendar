import React, {useContext} from "react";
import {useAlert} from "./AlertContext";
// import {useAlert} from "./AlertContext";
// import {AlertContext, useAlert} from "../app";

export default function Alert() {

    // const alert = useContext(AlertContext);
    const alert = useAlert();
    // const alert = useAlert();

    if (!alert) return null;

    return (
        <div style={{backgroundColor: 'red'}}>
            Это очень важное сообщение
        </div>
    );
}
