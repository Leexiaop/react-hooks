import React, { useEffect } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import  actions from '../../actions';
import Slider from '../../components/slider';

const Home = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getBannerData())
    }, [dispatch])
    const bannerImg = []
    return (
        <div className='home'>
            这是首页
            <Slider
                bannerImg = { bannerImg }
            />
        </div>
    )
}

export default Home;