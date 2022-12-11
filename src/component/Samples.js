import React from 'react'
import formatDate from '../funcs/FormatDate'
import * as sample from '.'

const Samples = () => {
	const dateTime = { formated: formatDate(new Date()) }
	return (
		<div>
			<sample.Bold dateTime={dateTime.formated} />
			<sample.InputTextArea dateTime={dateTime.formated} />
			<sample.InputTextField dateTime={dateTime.formated} />
			<sample.Italic dateTime={dateTime.formated} />
			<sample.Enumerated dateTime={dateTime.formated} />
			<sample.Image dateTime={dateTime.formated} />
			<sample.htmlExternalLink dateTime={dateTime.formated} />
			<sample.SubSup dateTime={dateTime.formated} />
			<sample.Strike dateTime={dateTime.formated} />
			<sample.HtmlReverse dateTime={dateTime.formated} />
		</div>
	)
}

export default Samples
