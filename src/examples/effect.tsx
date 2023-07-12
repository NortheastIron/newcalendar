import React, {useState, useEffect} from 'react';
import './styles.css';
import './stylesS.scss';

// import IMAGE from './react.jpg';
// import {ClickCounter} from "./ClickCounter";

export const App = () => {
    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({x: 0, y: 0});

    // useEffect(() => {
    //     console.log('render');
    // });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json));
        console.log('Type change', type);
    }, [type]);

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        });
    };

    useEffect(() => {
        console.log('componentDidMount');

        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return (<>
        <h1>
            React TS WEBPACK START TEMPLATE1 - {process.env.NODE_ENV} {process.env.name}  FFF
        </h1>
        <span>HAAA</span>
        {/*<img src={IMAGE} alt="React logo" width='300' height='200'/>*/}
        {/*<ClickCounter/>*/}

        <h1>
            Ресурс: {type}
        </h1>

        <button onClick={() => setType('users')}>Пользователи</button>
        <button onClick={() => setType('todos')}>Todos</button>
        <button onClick={() => setType('posts')}>Posts</button>

        {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
        <pre>{JSON.stringify(pos, null, 2)}</pre>
    </>);
};
