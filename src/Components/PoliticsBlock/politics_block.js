import React from 'react';
import SectorItem from "./sector_item";
import "./politics_block.scss";

const PoliticsBlock = ({header, subheader, sectors_arr}) => {

    const sect_items = sectors_arr.map((item, idx) => <SectorItem sector = {item} number = {idx+1} key = {idx}/>); 

    return (
        <section className="politics container" id="politics">
			<h2 className="politics-header">{header}</h2>
			<p className="politics-subheader">{subheader}</p>
			<div className="politics-list">
				{sect_items}
			</div>
		</section>
    );
};

export default PoliticsBlock;
