import React from 'react'

const htmlExternalLink = (props) => (
	<div>
		<dt>7. Link</dt>
		<dd>
			<a
				href="https://pt.wikipedia.org/wiki/Programa_Ol%C3%A1_Mundo"
				target="_blank"
				rel="noreferrer"
			>
				Hello World!
			</a>
			<span> </span>
			<a href="https://www.timeanddate.com/" target="_blank" rel="noreferrer">
				{props.dateTime}
			</a>
		</dd>
	</div>
)

export default htmlExternalLink
