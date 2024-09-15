import { Typography, AppBar, Toolbar, Tabs, Tab } from "@mui/material";
const NavigationMenu = () => {
	return (
		<AppBar>
			<Toolbar>
				<Typography variant="h4">Material UI Naviagation Menu</Typography>
				<Tabs
					sx={{ marginLeft: "auto" }}
					textColor="primary"
					indicatorColor="secondary">
					<Tab label="Home" />
					<Tab label="About" />
					<Tab label="Contact" />
				</Tabs>
			</Toolbar>
		</AppBar>
	);
};
export default NavigationMenu;
