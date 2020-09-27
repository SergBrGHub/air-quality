import React, {useState} from 'react';

const SectorItem = ({sector, number}) => {
    
	const [isToolTipShowing, setToolTipShowing] = useState(false); 
    const [isDirectionSwitched, setDirectionSwitched] = useState(false); // direction tooltip left or right
    
	const toggleToolTip = (newValue) => {
		setDirectionSwitched(number%3 === 0); // last element right side, number = index array+1
		setToolTipShowing(newValue);
	}
	
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
				isToolTipShowing && <p className={`politics-list-item-tooltip ${ isDirectionSwitched ? "politics-list-item-tooltip-switched" : "" }`}>
					{sector.tooltip}
				</p>
			}
		</div>
	);
};

export default SectorItem;