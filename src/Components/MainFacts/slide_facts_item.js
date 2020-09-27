import React from 'react';

const SlideFactsItem = ({item}) => {
    return (
        <div className="mainfacts-slide">
            <img src={item.img_url} alt="slide_image"/>
            <p className="mainfacts-slide-capt">{item.caption}</p>
        </div>
    );
};

export default SlideFactsItem;