import styled from "styled-components";

export const StyledUl = styled("ul")`
  display: flex;
  padding-left: 0;
  list-style: none;
`;

export const NavContainer = styled("nav")`
  display: flex;
  justify-content: center;
`;

export const StyledLi = styled("li")`
  display: flex;
  border: solid 1px #d9dcdf;
  border-left-style: none;

  &:first-of-type{
    border-left-style: solid;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-of-type{
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }


  &.no-border {
   border-style: none;
   padding: 0.4rem 0.8rem;

  }
`;


export const StyledNavLink = styled("a")`
  display: flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  color:  #0072E5;
  text-decoration: none;
  &.active{
    background-color: #30A2FF;
    color: #eee;
  }
  &:hover{
    background-color: #f9f9f9; 
  }
  &.active:hover{
    background-color: #40B2FF;   
  }
`;
