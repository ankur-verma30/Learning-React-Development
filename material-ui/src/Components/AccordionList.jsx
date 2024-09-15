import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Autocomplete,
	TextField,
	Typography,
} from "@mui/material";

const AccordionList = () => {
	const courses = ["react", "node.js", "next.js", "mongoDB"];
	return (
		<div>
			<Accordion>
				<AccordionSummary expandIcon=" ^ ">
					<Typography variant="h6">Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant="body2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
						perferendis?
					</Typography>
				</AccordionDetails>
			</Accordion>
			{/* autocomplete */}
			<Autocomplete
				sx={{ width: 300 }}
				options={courses}
				renderInput={(params) => <TextField {...params} label="Courses" />}
			/>
            
		</div>
	);
};
export default AccordionList;
