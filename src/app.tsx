import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import './styles.css';
import './stylesS.scss';

import IMAGE from './react.jpg';
import {ClickCounter} from "./ClickCounter";

import ItemsList from "./itemsList";

export const App = () => {

    const [count, setCount] = useState(1);
    const [colored, setColored] = useState(false);

    const styles = {
        color: colored ? 'darkred' : 'black'
    };

    //почти тоже самое что и мемо, но возвращаем колбек, а мемо возвращает сам результат
    const generateItemsFromApi = useCallback(() => {
        return new Array(count).fill('').map((_i, index) => `Element ${index + 1}`);
    }, [count]);

    return (<>
        <h1>
            React TS WEBPACK START TEMPLATE1 - {process.env.NODE_ENV} {process.env.name}  FFF
        </h1>
        <img src={IMAGE} alt="React logo" width='300' height='200'/>
        <ClickCounter/>

        <h1 style={styles}>Kol-vo elementov: {count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>Добавить</button>
        <button onClick={() => setColored(prev => !prev)}>Izmeniti</button>

        <ItemsList getItems={generateItemsFromApi}/>
    </>);
};
