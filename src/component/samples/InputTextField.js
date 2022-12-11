import React from 'react'

const InputTextField = (props) => (
	<div>
		<dt>3. Inside Input</dt>
		<dd>
			<input
				type="text"
				value={`Hello World! ${props.dateTime}`}
				readOnly
				size={30}
			/>
		</dd>
	</div>
)
export default InputTextField
