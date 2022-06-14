import { useEffect, useState } from "react";
import { Film, People } from "../../models";
import { StyledArrowBackIcon, H2, AttributeLabelC1, AttributeLabelC2, AttributeValueC1, AttributeValueC2, StyledButton, GridContainer, MainContent, MoviesContainer, SpeciesContainer, StarshipsContainer, VehiclesContainer, Header, Footer } from "./Card.styles";
import { useFetchPlanet } from "../../api/hooks";
import { dateFormat, getFullYear } from "../../common/dateUtils";
import { CardContainerList } from "./CardContainerList";
import { apiRoutes } from '../../api/apiRoutes';

export interface CardProps {
  person: People;
  header: string;
  close: () => void;
  movieData: Film[];
}

export function Card({ header, person, close, movieData }: CardProps) {
  const planetId = parseInt(person.homeworld.split("/planets/")[1].replace("/", ""));
  const { planet } = useFetchPlanet({ id: planetId });
  const [homeworld, setHomeworld] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [starships, setStarships] = useState<string>("");
  const [vehicles, setVehicles] = useState<string>("");

  // get all movie appearences for the character 
  function moviesWithYear() {
    const movies = Object.values(movieData).filter((movie) => (person.films).includes(movie.url))
      .map((movie, index) => <div key={index}>{`${movie.title} (${getFullYear(movie.release_date)})`}</div>);
    return movies;
  }

  // fetch all species for the charater
  function getSpecies() {
    Promise.all(
      person.species.map((url) => {
        const id = parseInt(url.split("/species/")[1].replace("/", ""));
        return fetch(apiRoutes.species + id)
          .then(res => res.json())
      }
      )
    ).then((data) => {
      const speciesNames = data.map((species) => {
        return species["name"];
      });
      setSpecies(speciesNames.join("|"));
    });
  }

  // fetch all starships for the charater
  function getStarships() {
    //starships
    Promise.all(
      person.starships.map((url) => {
        const id = parseInt(url.split("/starships/")[1].replace("/", ""));
        return fetch(apiRoutes.starships + id)
          .then(res => res.json())
      })
    ).then((data) => {
      const starshipNames = data.map((starship) => {
        return starship["name"];
      });
      setStarships(starshipNames.join("|"));
    });
  }

  // fetch all vehicles for the charater
  function getVehicles() {
    //vehicles
    Promise.all(
      person.vehicles.map((url) => {
        const id = parseInt(url.split("/vehicles/")[1].replace("/", ""));
        return fetch(apiRoutes.vehicles + id)
          .then(res => res.json())
      })
    ).then((data) => {
      const vehicleNames = data.map((vehicle) => {
        return vehicle["name"];
      });
      setVehicles(vehicleNames.join("|"));
    });
  }

  useEffect(() => {
    setHomeworld(planet?.name ?? "");
    getSpecies();
    getStarships();
    getVehicles();
  }, [person, planet, getSpecies, getStarships, getVehicles]);

  return (
    <GridContainer>
      <Header>
        <StyledButton title="Back to list" onClick={close} style={{ position: "relative", top: 0 }}>
          <StyledArrowBackIcon />
        </StyledButton>
        <H2>{header}</H2>
      </Header>
      <MainContent>
        <AttributeLabelC1>Gender</AttributeLabelC1>
        <AttributeValueC1>{person.gender}</AttributeValueC1>
        <AttributeLabelC2>Height</AttributeLabelC2>
        <AttributeValueC2>{person.height}</AttributeValueC2>

        <AttributeLabelC1>Hair color</AttributeLabelC1>
        <AttributeValueC1>{person.hair_color}</AttributeValueC1>
        <AttributeLabelC2>Birth year</AttributeLabelC2>
        <AttributeValueC2>{person.birth_year}</AttributeValueC2>

        <AttributeLabelC1>Mass</AttributeLabelC1>
        <AttributeValueC1>{person.mass}</AttributeValueC1>
        <AttributeLabelC2>Skin color</AttributeLabelC2>
        <AttributeValueC2>{person.skin_color}</AttributeValueC2>

        <AttributeLabelC1>Homeworld</AttributeLabelC1>
        <AttributeValueC1>{homeworld}</AttributeValueC1>
      </MainContent>

      <MoviesContainer>
        <div className="title">Movie occurrences ({person.films.length})</div>
        <div className="main">{moviesWithYear()}</div>
      </MoviesContainer>
      <SpeciesContainer>
        {<CardContainerList title="Belongs to species" data={species} numberOfItems={person.species.length} />}
      </SpeciesContainer>
      <StarshipsContainer>
        {<CardContainerList title="Starships piloted" data={starships} numberOfItems={person.starships.length} />}
      </StarshipsContainer>
      <VehiclesContainer>
        {<CardContainerList title="Vehicles piloted" data={vehicles} numberOfItems={person.vehicles.length} />}
      </VehiclesContainer>
      <Footer>
        Created: {dateFormat(person.created)}, edited: {dateFormat(person.edited)}
      </Footer>
    </GridContainer>
  );
}
