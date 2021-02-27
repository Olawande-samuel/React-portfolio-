import React from "react";

function Service(props) {
	const { image, header, detail, col, container, imgWrapper} = props;
	return (
		<div className={col}>
			<div className={container}>
				<div className={imgWrapper}>
					<i>{image} </i>
				</div>
				<h3>{header}</h3>
				<p>{detail}</p>
			</div>
		</div>
	);
}

export default Service;
