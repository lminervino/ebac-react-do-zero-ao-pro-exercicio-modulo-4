import React from 'react'

const Image = (props) => (
	<div>
		<dt>6. Image </dt>
		<dd>
			<picture>
				<img src={require('../../images/hw.png')} alt="Hello Wotld!" />
			</picture>
			<span> </span>
			{props.dateTime}
		</dd>
	</div>
)
export default Image
