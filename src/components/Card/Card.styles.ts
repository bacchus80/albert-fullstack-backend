import styled from "styled-components";
import { IoIosArrowBack as ArrowBackIcon } from "react-icons/io";

export const StyledArrowBackIcon = styled(ArrowBackIcon)`
  font-size: 20px;
  color: #1976d2;
`;
export const Span = styled("span")`
&.label{
  font-weight: bold;
  text-align: right;
}
`;

export const StyledButton = styled("button")`
  display: flex;
  border: 1px solid rgba(25, 118, 210, 0.5);
  background-color: transparent;
  padding: 4px 8px;
  color: #1976d2;
  border-radius: 4px;
  &:hover{
   background-color: #f9f9f9;
    cursor: pointer;
  }
`;
//    animation: ${fadein} 1s;

export const GridContainer = styled("div")`
  max-width: 1200px;
  min-height: 90vh;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px 200px 170px 40px;
  gap: 1.5rem;
  display: grid;
  width: 100%;
  grid-template-areas:
    "header header header"
    "main main movies"
    "species starships vehicles"
    "footer footer footer";

  @media (max-width: 900px) {
    grid-template-columns:  minmax(40%, 250px) minmax(40%, 250px);
    grid-template-rows: 80px 200px 200px 200px 40px;
    grid-template-areas:
      "header header"
      "main main"
      "movies species"
      "starships vehicles"
      "footer footer";
  }
  @media (max-width: 600px) {
    grid-template-columns: minmax(360px, 90%);
    grid-template-rows: 80px 200px min-content min-content min-content min-content 40px;
    grid-template-areas:
      "header"
      "main"
      "movies"
      "species"
      "starships"
      "vehicles"
      "footer";
  }
`;

export const Header = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: header;
  padding: 0 0.25rem;
  border-bottom: solid 1px #eee;
`;

export const H2 = styled("h2")`
  display: flex;
  width: 60%;
`;

export const LabelValue = styled("div")`
  grid-area: labelValue;
  line-height: 40px;
`;

export const AttributeLabelC1 = styled("div")`
  grid-area: attributeLabelC1;
  color: #484848;
  text-align: right;
  font-weight: bold;
  line-height: 28px;
  padding-right: 5px;
  grid-column: auto /span 1;
  grid-row: auto /span 1;
`;
export const AttributeLabelC2 = styled(AttributeLabelC1)`
  grid-area: attributeLabelC2;
  grid-row: auto /span 1;
`;

export const AttributeValueC1 = styled(AttributeLabelC1)`
  grid-area: attributeValueC1;
  color: #111;
  text-align: left;
  font-weight: normal;
  grid-column: auto /span 1;
  grid-row: auto /span 1;
`;
export const AttributeValueC2 = styled(AttributeValueC1)`
  grid-area: attributeValueC2;
  grid-row: auto /span 1;
`;

export const MainContent = styled("div")`
  grid-area: main;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 28px;

  grid-template-areas: 
  "attributeLabelC1 attributeValueC1 attributeLabelC2 attributeValueC2"
  "attributeLabelC1 attributeValueC1 attributeLabelC2 attributeValueC2"
  "attributeLabelC1 attributeValueC1 attributeLabelC2 attributeValueC2"
  "attributeLabelC1 attributeValueC1 . ."
  ;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
    "attributeLabelC1 attributeValueC1"
    "attributeLabelC1 attributeValueC1"
    "attributeLabelC1 attributeValueC1"
    
    "attributeLabelC2 attributeValueC2"
    "attributeLabelC2 attributeValueC2"
    "attributeLabelC2 attributeValueC2";

}

`;

export const MoviesContainer = styled("div")`
  grid-area: movies;
  background-color: #fcfcfc;
  border: solid 1px #eee;
  border-radius: 4px;
  line-height: 20px;
  & > div.title {
    text-align: center;
    font-weight: bold;
    border-bottom: solid 1px #eee;
    background-color: #f9f9f9;
    padding: 8px 16px;
  }
  & > div.main {
    text-align: left;
    padding: 8px 16px;
  }

  @media (max-width: 900px) {
    & > div.main {
      text-align: center;
    }
  }
`;

export const SpeciesContainer = styled(MoviesContainer)`grid-area: species;`;
export const StarshipsContainer = styled(MoviesContainer)`grid-area: starships;`;
export const VehiclesContainer = styled(MoviesContainer)`grid-area: vehicles;`;

export const Footer = styled("footer")`
  grid-area: footer;
  border-top: solid 1px #ddd;
  padding-top: 10px;
  margin-top: 30px;
  padding-bottom: 30px;
  color: #333;
`;



export const StyledSpan = styled("span")`
  border: solid 1px;
  line-height: 28px;
  &.label {
    padding-right: 8px;
    font-weight: bold;
  }  
`;
