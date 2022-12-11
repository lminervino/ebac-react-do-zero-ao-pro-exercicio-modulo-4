import React from 'react'

const InputTextArea = (props) => (
	<div>
		<dt>2. Inside TextArea</dt>
		<dd>
			<textarea value={`Hello World! ${props.dateTime}`} readOnly></textarea>
		</dd>
	</div>
)

export default InputTextArea
