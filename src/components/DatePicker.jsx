import * as React from "react"
import DateAdapter from "@mui/lab/AdapterMoment"
import TextField from "@mui/material/TextField"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import DatePicker from "@mui/lab/DatePicker"

export default function BasicDatePicker() {
	const [value, setValue] = React.useState(null)

	return (
		<LocalizationProvider dateAdapter={DateAdapter}>
			<DatePicker
				label="Basic example"
				value={value}
				onChange={(newValue) => {
					setValue(newValue)
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	)
}
