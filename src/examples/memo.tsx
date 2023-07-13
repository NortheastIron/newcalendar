import React, {useState, useEffect, useRef, useMemo} from 'react';
import './styles.css';
import './stylesS.scss';


function complexComputed(num) {
    let i = 0;
    while (i < 1111119999) i++;
    return num * 2;
}

export const App = () => {

    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);
    //закешировал некоторые значения чтобы отвязать их от рендера ..можто сказать аналог shouldComponentUpdate
    const styles = useMemo(() => ({color: colored ? 'darkred' : 'black'}), [colored]);

    const computed = useMemo(() => {
        return complexComputed(number);
    }, [number]);

    useEffect(() => {
        console.log('styles changed');
    }, [styles]);

    return (<>
        <h1>
            React TS WEBPACK START TEMPLATE1 - {process.env.NODE_ENV} {process.env.name}  FFF
        </h1>

        <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
        <button onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
        <button onClick={() => setNumber(prev => prev - 1)}>Убавить</button>
        <button onClick={() => setColored(prev => !prev)}>Izmeniti</button>
    </>);
};
