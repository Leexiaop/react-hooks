import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
// import { Carousel, WingBlank } from 'antd-mobile';

const Slider = (props) => {
    const { bannerImg } = props;
    console.log(bannerImg)
    return (
        <div className='slider'>
            {/* <WingBlank>
                <Carousel>
                    我是轮播图
                </Carousel>
            </WingBlank> */}
            我是轮播图
        </div>
    )
}

Slider.prototype = {
    bannerImg: PropTypes.array.isRequired
};

export default Slider;
