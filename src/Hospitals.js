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
import "./Hospitals.css";

function Hospitals() {
	return (
		<div className="page__hospitals">
			<h2>Corona Serving Hospitals</h2>
			<div className="hospital_rows">
				<Card className="infoBox">
					<CardContent>
						<Typography>
							Kuwait Bangladesh Friendship Government Hospital
						</Typography>
						<h5>Address: Isakha Ave, Dhaka 1230</h5>
						<h5>Contact: 01999-956290</h5>
						<h5>Total Beds: 26</h5>
						{/* <h5>Vacancy: 12</h5> */}
						<div className="infoBox__buttons">
							<Button type="tel" variant="contained" color="primary">
								Contact
							</Button>
							<Button variant="contained" color="secondary">
								Book
							</Button>
						</div>
					</CardContent>
				</Card>
				<Card className="infoBox">
					<CardContent>
						<Typography>Kurmitola General Hospital</Typography>
						<h5>Address: Tongi Diversion Rd, Dhaka 1206</h5>
						<h5>Contact: 02-55062388</h5>
						<h5>Total Beds: 12</h5>
						{/* <h5>Vacancy</h5> */}
						<div className="infoBox__buttons">
							<Button variant="contained" color="primary">
								Contact
							</Button>
							<Button variant="contained" color="secondary">
								Book
							</Button>
						</div>
					</CardContent>
				</Card>
				<Card className="infoBox">
					<CardContent>
						<Typography>
							National Institute of Diseases of the Chest and Hospital
						</Typography>
						<h5>Address: Mohakhali, Dhaka</h5>
						<h5>Contact: 02-8811910</h5>
						<h5>Total Beds: 10</h5>
						{/* <h5>Vacancy</h5> */}
						<div className="infoBox__buttons">
							<Button variant="contained" color="primary">
								Contact
							</Button>
							<Button variant="contained" color="secondary">
								Book
							</Button>
						</div>
					</CardContent>
				</Card>
				<Card className="infoBox">
					<CardContent>
						<Typography>Dhaka Medical College Hospital</Typography>
						<h5>Address: Shahabag Dhaka</h5>
						<h5>Contact: 02-55165088</h5>
						<h5>Total Beds: 30</h5>
						{/* <h5>Vacancy</h5> */}
						<div className="infoBox__buttons">
							<Button variant="contained" color="primary">
								Contact
							</Button>
							<Button variant="contained" color="secondary">
								Book
							</Button>
						</div>
					</CardContent>
				</Card>
				<Card className="infoBox">
					<CardContent>
						<Typography>Railway General Hospital</Typography>
						<h5>Address: Komlapur, Dhaka</h5>
						<h5>Contact: 02-85547621</h5>
						<h5>Total Beds: 15</h5>
						{/* <h5>Vacancy</h5> */}
						<div className="infoBox__buttons">
							<Button variant="contained" color="primary">
								Contact
							</Button>
							<Button variant="contained" color="secondary">
								Book
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="hospital_rows">
				<Card className="infoBox">
					<CardContent>
						<Typography>Dhaka Mohanagar General Hospital</Typography>
						<h5>Address: Armanitola, Dhaka</h5>
						<h5>Contact: 02-57390860</h5>
						<h5>Total Beds: 14</h5>
						{/* <h5>Vacancy</h5> */}
						<div className="infoBox__buttons">
							<Button variant="contained" color="primary">
								Contact
							</Button>
							<Button variant="contained" color="secondary">
								Book
							</Button>
						</div>
					</CardContent>
				</Card>
				<Card className="infoBox">
					<CardContent>
						<Typography>
							Sheikh Russel GastroLiver Hospital
						</Typography>
						<h5>Address: Niketon</h5>
						<h5>Contact: 02-84752136</h5>
						<h5>Total Beds: 22</h5>
						{/* <h5>Vacancy</h5> */}
						<div className="infoBox__buttons">
							<Button variant="contained" color="primary">
								Contact
							</Button>
							<Button variant="contained" color="secondary">
								Book
							</Button>
						</div>
					</CardContent>
				</Card>
				<Card className="infoBox">
					<CardContent>
						<Typography>Sajida Foundation Hospital</Typography>
						<h5>Address: Keraniganj</h5>
						<h5>Contact: 02-95877462</h5>
						<h5>Total Beds: 8</h5>
						{/* <h5>Vacancy</h5> */}
						<div className="infoBox__buttons">
							<Button variant="contained" color="primary">
								Contact
							</Button>
							<Button variant="contained" color="secondary">
								Book
							</Button>
						</div>
					</CardContent>
				</Card>
				<Card className="infoBox">
					<CardContent>
						<Typography>Mirpur Maternity Hospital</Typography>
						<h5>Address: Mirpur, Dhaka</h5>
						<h5>Contact: 02-55245865</h5>
						<h5>Total Beds: 12</h5>
						{/* <h5>Vacancy</h5> */}
						<div className="infoBox__buttons">
							<Button variant="contained" color="primary">
								Contact
							</Button>
							<Button variant="contained" color="secondary">
								Book
							</Button>
						</div>
					</CardContent>
				</Card>
				<Card className="infoBox">
					<CardContent>
						<Typography>Jinjira Specialized Hospital</Typography>
						<h5>Address: Keraniganj</h5>
						<h5>Contact: 02-88576224</h5>
						<h5>Total Beds: 20</h5>
						{/* <h5>Vacancy</h5> */}
						<div className="infoBox__buttons">
							<Button variant="contained" color="primary">
								Contact
							</Button>
							<Button variant="contained" color="secondary">
								Book
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default Hospitals;
