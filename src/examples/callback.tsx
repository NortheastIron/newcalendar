import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import './styles.css';
import './stylesS.scss';

import ItemsList from "../itemsList";

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
        <h1 style={styles}>Kol-vo elementov: {count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>Добавить</button>
        <button onClick={() => setColored(prev => !prev)}>Izmeniti</button>

        <ItemsList getItems={generateItemsFromApi}/>
    </>);
};
