import { GET_BANNER_ACTION } from '../constants'
export default (state = {}, action) => {
    switch (action.type) {
        case GET_BANNER_ACTION:
            return {a: {b:2}}
        default:
            return state
    }
}