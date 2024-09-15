import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography,
} from "@mui/material";
const Cards = () => {
	return (
		<div>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component={"img"}
					height="140"
					image="https://dog.ceo/api/breeds/image/random"
					alt="test image"
				/>
				<CardContent>
					<Typography variant="h3" component="div">
						Web Design
					</Typography>
					<Typography variant="body2">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
						perferendis?
					</Typography>
					<CardActions>
						<Button variant="contained" color="secondary">
							Share
						</Button>
					</CardActions>
				</CardContent>
			</Card>
			<Dialog open={false}>
				<DialogTitle>Delete Product</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Are you sure you want to delete the product
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button>Cancel</Button>
					<Button>Delete</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default Cards;
