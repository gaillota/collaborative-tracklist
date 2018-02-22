import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import App from './App'

const initialState = {}
const store = configureStore(initialState)
const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    MOUNT_NODE,
)
registerServiceWorker()
