/** @format */

import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function PlanetCard(props) {
	const {
		planetsPage,
		name,
		climate,
		diameter,
		terrain,
		population,
		filmsAppearedIn,
		famousResidents,
	} = props;

	const planetArray = planetsPage;

	const planetCardMaker = (planet) => {
		return (
			<article>
				<Card>
					<CardBody>
						<CardTitle className='planetName' tag='h5'>
							{planet.name.toUpperCase()}
						</CardTitle>
						<CardSubtitle
							className='planetPopulation'
							tag='h6'
							className='mb-2 text-muted'
						>
							Population: {planet.population}
						</CardSubtitle>
						<CardText className='planetInfo'>
							Climate: {planet.climate.toUpperCase()}
							<br />
							Terrain: {planet.terrain.toUpperCase()}
							<br />
							Diameter: {planet.diameter}
						</CardText>
					</CardBody>
				</Card>
			</article>
		);
	};

	return (
		<section>
			{planetArray.map((planet) => {
				return planetCardMaker(planet);
			})}
		</section>
	);
}
export default PlanetCard;
