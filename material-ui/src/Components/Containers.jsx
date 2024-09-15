import { Container, Typography } from "@mui/material";

const Containers = () => {
	return (
		<>
			<Container maxWidth="xs" sx={{ backgroundColor: "red", color: "white" }}>
				<Typography variant="body2">Containers is extra small</Typography>
			</Container>
			<br />
			<Container maxWidth="sm" sx={{ backgroundColor: "red", color: "white" }}>
				<Typography variant="body2">Containers is small</Typography>
			</Container>
			<br />
			<Container maxWidth="md" sx={{ backgroundColor: "red", color: "white" }}>
				<Typography variant="body2">Containers is medium</Typography>
			</Container>
			<br />{" "}
			<Container maxWidth="lg" sx={{ backgroundColor: "red", color: "white" }}>
				<Typography variant="body2">Containers is large</Typography>
			</Container>
			<br />
			<Container maxWidth="xl" sx={{ backgroundColor: "red", color: "white" }}>
				<Typography variant="body2">Containers is extra large</Typography>
			</Container>
			<br />
		</>
	);
};
export default Containers;
