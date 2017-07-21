import {createStore} from 'redux'
import reducers from './reducer/index'
export function create(initState) {
    return createStore(reducers,initState,window.devToolsExtension?window.devToolsExtension():undefined)
}