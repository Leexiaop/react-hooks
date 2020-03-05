import { GET_BANNER_ACTION } from '../constants';
import axios from '../assets/axios';
import url from '../assets/url'

export const setBannerData = (payload) => {
    console.log(payload)
    return {
        type: GET_BANNER_ACTION,
        payload
    }
}

export const getBannerData = (params = {}) => {
    return async (dispatch, getState) => {
        const { data } = await axios.get(url.getSliderImage)
        console.log(getState, 'setBannerData')
        dispatch(setBannerData(data))
    }
}