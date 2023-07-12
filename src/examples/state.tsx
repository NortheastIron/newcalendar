import React, {useState} from 'react';
import './styles.css';
import './stylesS.scss';

// import IMAGE from './react.jpg';
// import {ClickCounter} from "./ClickCounter";

function computeInitialCounter() {
    console.log('Some calculations...');
    return Math.trunc(Math.random() * 20);
}

export const App = () => {

    // const [counter, setCounter] = useState(0);
    // const [counter, setCounter] = useState(computeInitialCounter());
    // отправляю калбек функцию чтобы больше не вызывать функцию инициализации
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter();
    });

    const [state, setState] = useState({
        title: 'Счётчик',
        date: Date.now()
    });

    function increment() {
        // setCounter(counter + 1);
        setCounter((prevCounter: number) =>  prevCounter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    function updateTitle() {
        setState(prev => {
            return {
                ...prev,
                title: 'New name'
            }
        });
    }

    return (<>
        <h1>
            React TS WEBPACK START TEMPLATE1 - {process.env.NODE_ENV} {process.env.name}  FFF
        </h1>
        <span>HAAA</span>
        {/*<img src={IMAGE} alt="React logo" width='300' height='200'/>*/}
        {/*<ClickCounter/>*/}

        <h1>Счётчик: {counter}</h1>
        <button onClick={increment}>Добавить</button>
        <button onClick={decrement}>Убрать</button>
        <button onClick={updateTitle}>Изменить название</button>

        <pre>{JSON.stringify(state, null, 2)}</pre>
    </>);
};
