import React, {useEffect, useRef, useState} from 'react';

// Mapbox
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import './air_quality.scss';


mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZ2I3NiIsImEiOiJja2ZsaGRsOXYwZGRjMnlwajMxZWVkYzdpIn0.0_pNMLy4sWxxCtYPYSZ66g';

const AirQuality = () => {
	const mapContainer = useRef(null);
	const [locationInfo] = useState({
		lng: 30.31,
		lat: 50.27,
		zoom: 9
	});
	
	useEffect(() => {
		new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/outdoors-v11',
			center: [locationInfo.lng, locationInfo.lat],
			zoom: locationInfo.zoom
		});
	});
	
	return (
		<section className={'air-q container'} id="idxquality">
			<h2 className="air-q-header">Индекс качества воздуха в режиме реального времени</h2>
			<div className="air-q-map" ref={mapContainer}/>
			<p className="air-q-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха
			 (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга 
			 на карте выше.</p>
		</section>
	);
};

export default AirQuality;