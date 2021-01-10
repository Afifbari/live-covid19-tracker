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
import "./Header.css";

function Header() {
	return (
		<div className="page__nav">
			<div className="page__nav-left">
				<h1>Corona Emergency Portal</h1>
			</div>
			<div className="page__nav-right">
				<Button color="primary">Services</Button>
				<Button variant="contained" color="secondary">
					Login/Signup
				</Button>
			</div>
		</div>
	);
}

export default Header;
