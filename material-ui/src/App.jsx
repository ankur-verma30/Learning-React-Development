import { Typography, Button, TextField } from "@mui/material";
import FormData from "./Components/FormData";
import NavigationMenu from "./Components/NavigationMenu";
import Cards from "./Components/Cards";
import Model from "./Components/Model";
import Containers from "./Components/Containers";
import ListComponents from "./Components/ListComponents";
import AccordionList from "./Components/AccordionList";
import DrawerComponent from "./Components/DrawerComponent";

function App() {
	return (
		<>
			<div>
				<NavigationMenu />
				<Cards />
				<Model />
				<DrawerComponent/>
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
				<Button variant="text" disabled>
					Click Me for Action
				</Button>
				<Button
					variant="outlined"
					onClick={() => alert("you clicked the button")}>
					Click Me
				</Button>
				<br />
				<TextField
					type="text"
					placeholder="This is the text section"
					variant="standard"
				/>
				<br />
				<TextField
					type="text"
					placeholder="This is the text "
					variant="outlined"
				/>
				<br />
				<TextField type="text" placeholder="Text Box" variant="filled" />

				<br />
				<br />
				<br />
				<FormData />

				<AccordionList />
				<br />

				<Containers />
				<br />
				<ListComponents />
				<br />
				
			</div>
		</>
	);
}

export default App;
