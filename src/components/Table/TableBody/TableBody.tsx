import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { ColumnData, People } from "../../../models";
import { StyledTd, StyledTr } from "../Table/Table.styles";

export interface TableBodyProps {
  tableData: any[];
  columnData: ColumnData[];
  pageSize: number;
  onClick(person: People): void;
  isLoading: boolean;
}

export function TableBody({ tableData, columnData, pageSize, onClick, isLoading }: TableBodyProps) {
  return (
    <tbody>
      {isLoading ?
        <TableRowSkeletons columnData={columnData} numberOfRows={pageSize} /> :
        tableData.map((data, index) => {
          return (
            <StyledTr key={index} onClick={() => onClick(data)}>
              {columnData.map(({ fieldName, optionalClassNames }) => {
                const tData = data[fieldName] ? data[fieldName] : "——";
                return <StyledTd key={fieldName} className={optionalClassNames}>{tData}</StyledTd>;
              })}
            </StyledTr>
          );
        })}
    </tbody>
  );
}


interface TableRowSkeletonsProps {
  /** Number of displayed skeleton table rows*/
  numberOfRows: number;
  /** Table columns */
  columnData: ColumnData[];
}

function TableRowSkeletons({ numberOfRows, columnData }: TableRowSkeletonsProps) {
  return (
    <>
      {Array(numberOfRows)
        .fill(null)
        .map((_, index) => (
          <StyledTr key={index}>
            {columnData.map(({ fieldName }) =>
              <StyledTd key={fieldName}><Skeleton /></StyledTd>
            )}
          </StyledTr>
        ))
      }
    </>
  );
}
