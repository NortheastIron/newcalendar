import './styles.css';
import './stylesS.scss';

import IMAGE from './react.jpg';

export const App = () => {
    return (<><h1>
                React TS WEBPACK START TEMPLATE1 - {process.env.NODE_ENV} {process.env.name}
            </h1>
            <span>HAAA</span>
        <img src={IMAGE} alt="React logo" width='300' height='200'/>
    </>);
};
