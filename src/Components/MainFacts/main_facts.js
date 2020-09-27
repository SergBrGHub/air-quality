import React from 'react';

import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import SlideFactsItem from './slide_facts_item';
import './main_facts.scss'

SwiperCore.use([Navigation, Pagination])

const MainFacts = ({header, slides}) => {
    const slidesitem = slides.map((item) => <SwiperSlide key={item.id}><SlideFactsItem item={item}/></SwiperSlide>);

    return (
        <section className="mainfacts container" id="mainfacts">
			<h2 className="mainfacts-header">{header}</h2>
			<div className="swiper-button-prev"/>
			<Swiper
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}}
				pagination={{
					el: '.mainfacts-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return `<span class="mainfacts-pagination-bullet ${className}"></span>`;
					}
				}}     
				slidesPerView={3}
				slidesPerGroup={3}
				spaceBetween={40}
				// centeredSlides={true}
			>
				{slidesitem}
			</Swiper>
			<div className="swiper-button-next"/>
			<div className="mainfacts-pagination"/>
		</section>
    );
};

export default MainFacts;
