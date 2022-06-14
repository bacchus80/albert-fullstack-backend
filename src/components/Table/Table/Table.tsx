import React, { useEffect, useState } from "react";
import { ColumnData, People } from "../../../models";
import { TableBody } from "../TableBody";
import { TableHead } from "../TableHead";
import { StyledTable } from "./Table.styles";

const ASC = "asc";
const DESC = "desc";

export interface TableProps{
  data: any[];
  columnData: ColumnData[];
  pageSize: number;
  onClick(person: People): void;
  optionalClassNames?: string[];
  isLoading: boolean;
}


export function Table({ data, columnData, pageSize, onClick, isLoading = false }: TableProps) {
  const [defaultTableData, setDefaultTableData] = useState(data);
  const [tableData, setTableData] = useState(data);
  const [sortField, setSortField] = useState<string>("");
  const [order, setOrder] = useState("");

  const handleSorting = (localSortField: string) => {
    const sortOrder = getSortorder(localSortField, sortField, order);
    setSortField(localSortField);
    setOrder(sortOrder);

    if (localSortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[localSortField] === null) return 1;
        if (b[localSortField] === null) return -1;
        if (a[localSortField] === null && b[localSortField] === null) return 0;
        return (
          a[localSortField].toString().localeCompare(b[localSortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === ASC ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
    if (sortOrder === "") {
      setTableData(defaultTableData);
    }
  };
  useEffect(() => {
    setTableData(data);
    setDefaultTableData(data);
  }, [data]);

  return (
    <StyledTable>
      <TableHead columnData={columnData} order={order} sortField={sortField} handleSorting={handleSorting} />
      <TableBody onClick={onClick} pageSize={pageSize} columnData={columnData} tableData={tableData} isLoading={isLoading} />
    </StyledTable>
  );
}

function getSortorder(localSortField: string, sortField: string, sortOrder: string): string {
  if (localSortField !== sortField) {
    return ASC;
  }
  switch (sortOrder) {
    case "":
      return ASC;
    case ASC:
      return DESC;
    case DESC:
      return "";
    default:
      return "";
  }
}