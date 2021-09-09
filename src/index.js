import React from 'react';
import ReactDOM from 'react-dom'
import App from  './componentes/App'
import reducer, { initialState } from './context/Reducer';
import { StateProvider } from './context/StateProvider';
import { UserProvider} from './context/AuthContext'


ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
    <UserProvider>   
        <App/>
    </UserProvider>    
    </StateProvider>,
    document.querySelector('#root'))