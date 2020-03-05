import { GET_BANNER_ACTION } from '../constants'
export const getBanner = (param) => {
    return {
        type: GET_BANNER_ACTION,
        payload: param
    }
}