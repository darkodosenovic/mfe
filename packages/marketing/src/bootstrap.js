import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

//Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <App />, el
    );
};

//Mount immidiately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

//Export mount function for usage in other container
export { mount };