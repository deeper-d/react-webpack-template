import React from "react"
import ReactDOM from "react-dom"
import Page1 from './Page1/index';
import store from '../redux/store';
import { Provider } from 'react-redux';

class App extends React.Component {

    render() {
        return <Provider store={store}>
            <Page1 />
        </Provider>

    }
}

ReactDOM.render(<App />, document.getElementById('root'))


