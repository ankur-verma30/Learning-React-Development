import {
	TextField,
	Button,
	FormGroup,
	FormControlLabel,
	FormControl,
	Checkbox,
	InputLabel,
	Select,
	MenuItem,
	FormLabel,
	RadioGroup,
	Radio,
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
				<FormControl>
					<InputLabel id="menu">Courses</InputLabel>
					<Select labelId="menu" id="meny-list" label="Courses">
						<MenuItem value="html">HTML</MenuItem>
						<MenuItem value="css">CSS</MenuItem>
						<MenuItem value="javascript">Javascript</MenuItem>
					</Select>

					<br />
				</FormControl>
				<br />
				<FormControl>
					<FormLabel>Gender</FormLabel>
					<RadioGroup name="gender">
						<FormControlLabel
							value="female"
							control={<Radio />}
							label="Female"
						/>
						<FormControlLabel value="male" control={<Radio />} label="Male" />
						<FormControlLabel value="other" control={<Radio />} label="Other" />
					</RadioGroup>
				</FormControl>
				<br />
				<Button type="submit" variant="contained">
					Submit Form
				</Button>
			</form>
		</>
	);
};

export default FormData;
