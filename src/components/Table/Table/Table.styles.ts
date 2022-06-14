import styled from "styled-components";

export const StyledTable = styled("table")`
  min-width: 800px;
  border-collapse: collapse;
        border-radius: 14px;
`;

export const StyledThead = styled("thead")`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #eee;
  color: #444;
  font-weight: bold;
  border-spacing: 0;
  border-radius: 4px;
`;

export const StyledTr = styled("tr")`
  &:nth-child(odd) {
    cursor: pointer;
    background-color: #fff;
  }
  &:nth-child(odd):hover {
    cursor: pointer;
    background-color: #fcfcfc;
  }
  &:nth-child(even) {
    cursor: pointer;
    background-color: #f9f9f9;
  }
  &:nth-child(even):hover {
    background-color: #f3f3f3;
  }
`;

export const StyledTd = styled("td")`
  border: 1px solid #ddd;
  padding: 8px;
  border-radius: 4px;
  text-align: left;
  border-spacing: 0;
  border-radius: 4px;
  &.right {
    text-align: right;
  }
`;

export const StyledTh = styled("th")`
  background-color: #efefef;
  border: 1px solid #ddd;
  padding: 8px;
  border-radius: 4px;
  text-align: left;
  border-spacing: 0;
  border-radius: 4px;
  &:hover{
    cursor: default;
  }
  &.right {
    text-align: right;
  }
  &.sort:hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }
`;
