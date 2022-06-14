import { ColumnData } from "../../../models";
import { StyledThead, StyledTr, StyledTh } from "../Table/Table.styles";
import { IoIosArrowUp as ArrowUpIcon, IoIosArrowDown as ArrowDownIcon } from "react-icons/io";

export interface TableHeadProps {
  columnData: ColumnData[];
  sortField: string;
  order: string;
  handleSorting(localSortField: string): void | null;
}

export function TableHead({ columnData, sortField, order, handleSorting }: TableHeadProps) {

  const handleSortingChange = (fieldName: string) => {
    handleSorting(fieldName);
  };

  return (
    <StyledThead>
      <StyledTr>
        {columnData.map(({ columnTitle, fieldName, optionalClassNames, sortable }) => {
          const className = sortable ? "sort" : "";
          const title = sortable
            ? sortField && sortField === fieldName && order === "asc"
              ? "Sort descending"
              : sortField && sortField === fieldName && order === "desc"
                ? "Default sort order"
                : "Sort ascending"
            : "";
          return (
            <StyledTh
              key={fieldName}
              onClick={sortable ? () => handleSortingChange(fieldName) : undefined}
              className={`${className} ${optionalClassNames}`}
              title={title}
            >
              {columnTitle} {sortArrow(fieldName, sortField, order)}
            </StyledTh>
          );
        })}
      </StyledTr>
    </StyledThead>
  );
}

function sortArrow(fieldName: string, sortField: string, sortOrder: string) {
  if (fieldName === sortField && sortOrder === "asc") {
    return <ArrowUpIcon fontSize={16} />;
  } else if (fieldName === sortField && sortOrder === "desc") {
    return <ArrowDownIcon fontSize={16} />;
  }
  return <ArrowDownIcon fontSize={16} color="transparent" />;
}