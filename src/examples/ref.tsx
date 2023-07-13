import React, {useState, useEffect, useRef} from 'react';
import './styles.css';
import './stylesS.scss';


// let renderCount = 1;

export const App = () => {

    //useRef посчитал кол-во рендеров, сделал ссылку на дом элемент, получил фокус, получил предыдущее состояние

    // const [renderCount, setRenderCount] = useState(1);
    const [value, setValue] = useState('initial');
    const renderCount = useRef(1);
    const inputRef = useRef(null);
    const prevValue = useRef('');

    useEffect(() => {
        renderCount.current++;
        console.log(inputRef.current);
        // renderCount++;
        // setRenderCount(prev => prev + 1);
    });

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    const focus = () => {
        inputRef.current.focus();
    };

    return (<>
        <h1>
            React TS WEBPACK START TEMPLATE1 - {process.env.NODE_ENV} {process.env.name}  FFF
        </h1>
        <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
        <h1>Колво рендеров: {renderCount.current}</h1>
        <h1>Pred sost: {prevValue.current}</h1>
        <button onClick={focus}>Click</button>
    </>);
};
