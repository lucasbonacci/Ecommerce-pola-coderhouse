import React from 'react';
import ReactDOM from 'react-dom'
import App from  './componentes/App'
import { UserProvider} from './context/AuthContext'
import { Provider } from 'react-redux'
import store from './redux/store/index'

ReactDOM.render(
    <Provider store={store}>
    <UserProvider>   
        <App/>
    </UserProvider>    
    </Provider>,
    document.querySelector('#root'))