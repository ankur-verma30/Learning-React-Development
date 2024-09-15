import {
	Alert,
	Button,
	CircularProgress,
	Drawer,
	IconButton,
	LinearProgress,
	List,
	ListItemButton,
	ListItemText,
	Rating,
	Snackbar,
	Typography,
} from "@mui/material";
import { useState } from "react";
import AddReactionIcon from '@mui/icons-material/AddReaction';

const DrawerComponent = () => {
	const [open, setOpen] = useState(false);
	const courses = ["react", "node.js", "next.js", "mongoDB"];
	return (
		<div>
			<Button variant="contained" onClick={() => setOpen(true)}>
				Open
			</Button>
			<Drawer open={open} onClose={() => setOpen(false)}>
				{/* Can create card list and menu */}
				<List>
					{courses.map((course) => (
						<ListItemButton key={course}>
							<ListItemText primary={course} />
						</ListItemButton>
					))}
				</List>
			</Drawer>
			<Snackbar open={true} autoHideDuration={3000}>
				<Alert severity="error">This is the error</Alert>
			</Snackbar>

			<br />
			<CircularProgress value={75} color="secondary" />
			<LinearProgress color="primary" />

			<br />
			<Rating value={2} size="large" precision={0.5} />
			<Typography variant="h6">Rate Me</Typography>

            <br />
            <IconButton color="secondary">
            <AddReactionIcon/>
            </IconButton>
		</div>
	);
};
export default DrawerComponent;
