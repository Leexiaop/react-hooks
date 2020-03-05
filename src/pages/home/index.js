import React from 'react';
import './index.scss';
import Slider from '../../components/slider';

const Home = (props) => {
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