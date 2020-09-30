import React, {useState} from 'react';

const SectorItem = ({sector, number}) => {
    
	const [isToolTipShowing, setToolTipShowing] = useState(false); 
	const [isDirectionSwitched, setDirectionSwitched] = useState(false); // direction tooltip left or right
    
	const toggleToolTip = (newValue) => {
		setDirectionSwitched(number%3 === 0); // last element right side, number = index array+1
		setToolTipShowing(newValue);
	}

	const isMobile = window.matchMedia(`(max-width: 414px)`).matches;

	const [isMobileTooltipShowing, setMobileTooltipShowing] = useState(false);

    const toggleMobileTooltip = (newValue) => {
        setMobileTooltipShowing(newValue);
        //  console.log('click ok');
	}
	
	if (isMobile) {
		return (
			<div className="politics-mobile-tooltip-main">
				{
					isMobile && isMobileTooltipShowing &&
					<div className={`politics-mobile-tooltip ${isMobileTooltipShowing ? "politics-mobile-tooltip-show" : ""}`}>
						
						<div className="politics-mobile-tooltip-navbar">
						<div className="politics-mobile-tooltip-navbar-close" onClick={() => toggleMobileTooltip(false)}>
							<div className="politics-mobile-tooltip-navbar-close1"></div>
							<div className="politics-mobile-tooltip-navbar-close2"></div>
							<div className="politics-mobile-tooltip-navbar-close3"></div>
						</div>
						</div>
						<p className="politics-mobile-tooltip-header">{sector.name}</p>
						<div className="politics-mobile-tooltip-content">{sector.tooltip}</div>
					</div>
				}
				<div className="politics-list-item"
						onClick={() => toggleMobileTooltip(true)} //for Mobile
						style={{
							background: `url(${sector.img_url}) center no-repeat`,
							backgroundSize: 'cover'
							}}>

					<p className="politics-list-item-name">{sector.name}</p>

					{/* {
						!isMobile && isToolTipShowing && <p className={`politics-list-item-tooltip ${ isDirectionSwitched ? "politics-list-item-tooltip-switched" : "" }`}>
							{sector.tooltip}
						</p>
					} */}
				</div>
			</div>
		);
	}
	else {
		return (
				<div className="politics-list-item"
						onMouseEnter={() => toggleToolTip(true)} // mouse over element
						onMouseLeave={() => toggleToolTip(false)}
						style={{
							background: `url(${sector.img_url}) center no-repeat`,
							backgroundSize: 'cover'
							}}>

					<p className="politics-list-item-name">{sector.name}</p>

					{
						!isMobile && isToolTipShowing && <p className={`politics-list-item-tooltip ${ isDirectionSwitched ? "politics-list-item-tooltip-switched" : "" }`}>
							{sector.tooltip}
						</p>
					}
				</div>
		);
	};
};

export default SectorItem;