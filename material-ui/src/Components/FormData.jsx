import {
	TextField,
	Button,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from "@mui/material";
import { useState } from "react";

const FormData = () => {
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputs);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<TextField
					name="name"
					type="text"
					onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
					value={inputs.name}
					placeholder="Enter your name"
					variant="outlined"
					sx={{ margin: "20px", border: "1px solid red" }}
				/>
				<br />
				<TextField
					name="email"
					type="email"
					value={inputs.email}
					onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
					placeholder="Enter your email"
					variant="outlined"
					sx={{ margin: "20px", border: "1px solid red" }}
				/>
				<br />
				<TextField
					name="password"
					type="password"
					value={inputs.password}
					onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
					placeholder="Enter your password"
					variant="outlined"
					sx={{ margin: "20px", border: "1px solid red" }}
				/>
				<br />
				<FormGroup>
					<FormControlLabel
						control={<Checkbox />}
						label="I agree to the terms and conditions"
					/>
				</FormGroup>
				<br />
				<Button type="submit" variant="contained">
					Submit Form
				</Button>
			</form>
		</>
	);
};

export default FormData;
