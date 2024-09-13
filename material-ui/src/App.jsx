import { Typography, Button, TextField } from "@mui/material";
import FormData from "./Components/FormData";
function App() {
	return (
		<>
			<div>
				{/* by default it is treated as paragraph tag */}
				<Typography variant="h3" color="primary">
					Hello World
				</Typography>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit
					culpa id modi facilis unde facere, nostrum, sequi sed cum eos error
					aspernatur.
				</p>
				<Button variant="contained" color="success" href="#">
					Click Me
				</Button>
				<Button variant="text" disabled>Click Me for Action</Button>
				<Button
					variant="outlined"
					onClick={() => alert("you clicked the button")}>
					Click Me
				</Button>
        <br/>
        <TextField type="text" placeholder="This is the text section" variant="standard"/>
        <br />
        <TextField type="text" placeholder="This is the text " variant="outlined"/>
        <br />
        <TextField type="text" placeholder="Text Box" variant="filled"/>

        <br />
        <br />
        <br />
        <FormData/>
			</div>
		</>
	);
}

export default App;
