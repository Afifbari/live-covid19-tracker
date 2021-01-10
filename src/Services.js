import React from "react";
import {
	MenuItem,
	FormControl,
	Select,
	CardContent,
	Card,
	Typography,
	Button,
} from "@material-ui/core";
import "./Services.css";

function Services() {
	return (
		<div className="page__services">
			<div className="services_text">
				<h4>
					Welcome to the Corona Emergency Portal.
					<br />
					Here you will find all the necessary corona related
					emergency services.
				</h4>
			</div>
			<div className="services_buttons">
				<Button variant="contained">Covid-19 Case Update</Button>
				<Button variant="contained">Corona Hospitals</Button>
				<Button variant="contained">Corona Safety Knowledge</Button>
				<Button variant="contained">Corona Ecommerce</Button>
				<Button variant="contained">Blood Plasma Bank</Button>
			</div>
		</div>
	);
}

export default Services;
