import React, { useState, useEffect } from "react";
import {
	MenuItem,
	FormControl,
	Select,
	CardContent,
	Card,
	Typography,
	Button,
} from "@material-ui/core";
import Header from "./Header";
import Services from "./Services";
import Hospitals from "./Hospitals";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import LineGraph from "./LineGraph";
import { sortData, prettyPrintStat } from "./util";
import "./CovidUpdate.css";
import "./App.css";
import "./Table.css";
import "leaflet/dist/leaflet.css";

function App() {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState("BD");
	const [countryInfo, setCountryInfo] = useState({});
	const [tableData, setTableData] = useState([]);
	const [mapCenter, setMapCenter] = useState({
		lat: 24,
		lng: 90,
	});
	const [mapZoom, setMapZoom] = useState(3);
	const [mapCountries, setMapCountries] = useState([]);
	const [casesType, setCasesType] = useState("cases");

	useEffect(() => {
		fetch("https://disease.sh/v3/covid-19/countries/BD")
			.then((response) => response.json())
			.then((data) => {
				setCountryInfo(data);
			});
	}, []);

	useEffect(() => {
		const getCountriesData = async () => {
			await fetch("https://disease.sh/v3/covid-19/countries")
				.then((response) => response.json())
				.then((data) => {
					const countries = data.map((country) => ({
						name: country.country,
						value: country.countryInfo.iso2,
					}));

					const sortedData = sortData(data);

					setTableData(sortedData);
					setMapCountries(data);
					setCountries(countries);
				});
		};

		getCountriesData();
	}, [countries]);

	const onCountryChange = async (event) => {
		const countryCode = event.target.value;
		setCountry(countryCode);

		const url =
			countryCode === "worldwide"
				? "https://disease.sh/v3/covid-19/all"
				: `https://disease.sh/v3/covid-19/countries/${countryCode}`;

		await fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setCountry(countryCode);
				setCountryInfo(data);

				setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
				setMapZoom(4);
			});
	};

	// console.log("Country Info >>>>", countryInfo);

	return (
		<div>
			<div className="covidUpdate">
				<div className="covidUpdate__header">
					<h2>COVID-19 Live Update</h2>
				</div>
				<div className="App">
					<div className="app__left">
						<div className="app__header">
							{/* <h2 >COVID-19 TRACKER</h2> */}
							<FormControl className="app__dropdown">
								<Select
									variant="outlined"
									onChange={onCountryChange}
									value={country}
								>
									<MenuItem value="worldwide">Worldwide</MenuItem>
									{countries.map((country) => (
										<MenuItem value={country.value}>
											{country.name}
										</MenuItem>
									))}

									{/* <MenuItem value="worldwide">Worldwide</MenuItem>
						<MenuItem value="worldwide">Option 2</MenuItem>
						<MenuItem value="worldwide">Option 3</MenuItem>
						<MenuItem value="worldwide">Yoooooooo</MenuItem> */}
								</Select>
							</FormControl>
						</div>

						<div className="app__stats">
							<InfoBox
								isRed
								active={casesType === "cases"}
								onClick={(e) => setCasesType("cases")}
								title="Coronavirus Case"
								cases={prettyPrintStat(countryInfo.todayCases)}
								total={prettyPrintStat(countryInfo.cases)}
							/>

							<InfoBox
								active={casesType === "recovered"}
								onClick={(e) => setCasesType("recovered")}
								title="Recovered"
								cases={prettyPrintStat(countryInfo.todayRecovered)}
								total={prettyPrintStat(countryInfo.recovered)}
							/>

							<InfoBox
								isRed
								active={casesType === "deaths"}
								onClick={(e) => setCasesType("deaths")}
								title="Deaths"
								cases={prettyPrintStat(countryInfo.todayDeaths)}
								total={prettyPrintStat(countryInfo.deaths)}
							/>
						</div>

						{/* Map */}
						<Map
							casesType={casesType}
							countries={mapCountries}
							center={mapCenter}
							zoom={mapZoom}
						/>
					</div>
					<Card className="app__right">
						<CardContent>
							<h3>Lives cases by country</h3>
							<Table countries={tableData} />
							<h3>Worldwide new {casesType}</h3>
							<LineGraph
								className="app__graph"
								casesType={casesType}
							/>
							{/* Graph */}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default App;
