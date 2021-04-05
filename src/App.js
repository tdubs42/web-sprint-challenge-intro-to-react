/** @format */

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import '../src/reset.css';
import {
	BASE_URL,
	PAGE_2,
	PAGE_3,
	PAGE_4,
	PAGE_5,
	PAGE_6,
} from './components/constants/constants';
import PlanetCard from './components/PlanetCard/PlanetCard';

function App() {
	//API loads in arrays of 10, with 60 planets that equals 6 pages
	const [planetsPageOne, setPlanetsPageOne] = useState([]);
	const [planetsPageTwo, setPlanetsPageTwo] = useState([]);
	const [planetsPageThree, setPlanetsPageThree] = useState([]);
	const [planetsPageFour, setPlanetsPageFour] = useState([]);
	const [planetsPageFive, setPlanetsPageFive] = useState([]);
	const [planetsPageSix, setPlanetsPageSix] = useState([]);

	// Page 1
	useEffect(() => {
		Axios.get(`${BASE_URL}/planets/`)
			.then((res) => {
				setPlanetsPageOne(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Page 2
	useEffect(() => {
		Axios.get(`${BASE_URL}/planets/${PAGE_2}`)
			.then((res) => {
				setPlanetsPageTwo(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Page 3
	useEffect(() => {
		Axios.get(`${BASE_URL}/planets/${PAGE_3}`)
			.then((res) => {
				setPlanetsPageThree(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Page 4
	useEffect(() => {
		Axios.get(`${BASE_URL}/planets/${PAGE_4}`)
			.then((res) => {
				setPlanetsPageFour(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Page 5
	useEffect(() => {
		Axios.get(`${BASE_URL}/planets/${PAGE_5}`)
			.then((res) => {
				setPlanetsPageFive(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Page 6
	useEffect(() => {
		Axios.get(`${BASE_URL}/planets/${PAGE_6}`)
			.then((res) => {
				setPlanetsPageSix(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<section className='App'>
			<h1 className='Header'>Star Wars Geography</h1>
			<PlanetCard
				className='chunkOf10 page1'
				planetsPage={planetsPageOne}
				index={planetsPageOne.index}
				name={planetsPageOne.name}
				climate={planetsPageOne.climate}
				diameter={planetsPageOne.diameter}
				terrain={planetsPageOne.terrain}
				population={planetsPageOne.population}
				filmsAppearedIn={planetsPageOne.films}
				famousResidents={planetsPageOne.residents}
			/>
			<PlanetCard
				className='chunkOf10 page2'
				planetsPage={planetsPageTwo}
				index={planetsPageTwo.index}
				name={planetsPageTwo.name}
				climate={planetsPageTwo.climate}
				diameter={planetsPageTwo.diameter}
				terrain={planetsPageTwo.terrain}
				population={planetsPageTwo.population}
				filmsAppearedIn={planetsPageTwo.films}
				famousResidents={planetsPageTwo.residents}
			/>
			<PlanetCard
				className='chunkOf10 page3'
				planetsPage={planetsPageThree}
				index={planetsPageThree.index}
				name={planetsPageThree.name}
				climate={planetsPageThree.climate}
				diameter={planetsPageThree.diameter}
				terrain={planetsPageThree.terrain}
				population={planetsPageThree.population}
				filmsAppearedIn={planetsPageThree.films}
				famousResidents={planetsPageThree.residents}
			/>
			<PlanetCard
				className='chunkOf10 page4'
				planetsPage={planetsPageFour}
				index={planetsPageFour.index}
				name={planetsPageFour.name}
				climate={planetsPageFour.climate}
				diameter={planetsPageFour.diameter}
				terrain={planetsPageFour.terrain}
				population={planetsPageFour.population}
				filmsAppearedIn={planetsPageFour.films}
				famousResidents={planetsPageFour.residents}
			/>
			<PlanetCard
				className='chunkOf10 page5'
				planetsPage={planetsPageFive}
				index={planetsPageFive.index}
				name={planetsPageFive.name}
				climate={planetsPageFive.climate}
				diameter={planetsPageFive.diameter}
				terrain={planetsPageFive.terrain}
				population={planetsPageFive.population}
				filmsAppearedIn={planetsPageFive.films}
				famousResidents={planetsPageFive.residents}
			/>
			<PlanetCard
				className='chunkOf10 page6'
				planetsPage={planetsPageSix}
				index={planetsPageSix.index}
				name={planetsPageSix.name}
				climate={planetsPageSix.climate}
				diameter={planetsPageSix.diameter}
				terrain={planetsPageSix.terrain}
				population={planetsPageSix.population}
				filmsAppearedIn={planetsPageSix.films}
				famousResidents={planetsPageSix.residents}
			/>
		</section>
	);
}

export default App;
