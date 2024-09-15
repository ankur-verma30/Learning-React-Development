import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const ListComponents = () => {
	const courses = ["react", "node.js", "next.js", "mongoDB"];
	return (
		<div>
			<List
				sx={{
					width: "250px",
					bgcolor: "grey",
				}}>
				{courses.map(course => (
					<ListItem key={course}>
						<ListItemButton>{" * "}</ListItemButton>
						<ListItemText primary={course} />
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default ListComponents;
