import {get} from '../index'
export function liveList() {
    return get('/api/live')
}