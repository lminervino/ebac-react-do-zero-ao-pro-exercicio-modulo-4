import React from 'react'

const SubSup = (props) => (
	<div>
		<dt>8. Superscript and Subscript</dt>
		<dd>
			<sup>Hello World!</sup>
			<sub>{props.dateTime}</sub>
		</dd>
	</div>
)

export default SubSup
