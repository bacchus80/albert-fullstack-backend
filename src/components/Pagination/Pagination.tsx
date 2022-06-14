
import { IoIosArrowBack as ArrowBackIcon, IoIosArrowForward as ArrowForwardIcon } from "react-icons/io";
import { NavContainer, StyledUl, StyledLi, StyledNavLink } from "./Pagination.styles";

export interface PaginationProps {
  currentPage: number;
  numberOfRowsPerPage: number;
  maxFetchCount: number;
  showTextCount?: boolean;
  setPage: (page: number) => void;
}

const PAGINATION_SIZE = 5;

export function Pagination({
  currentPage,
  numberOfRowsPerPage,
  maxFetchCount,
  showTextCount = false,
  setPage,
}: PaginationProps) {
  const maxPagination = Math.ceil(maxFetchCount / numberOfRowsPerPage);
  const displayText = "Showing records " + (currentPage * numberOfRowsPerPage - numberOfRowsPerPage + 1) + " av " + Math.min(maxFetchCount, currentPage * numberOfRowsPerPage);

  //  const disablePrevButton = currentPage === 1 ? true : false;
  //  const disableNextButton = currentPage === maxPagination ? true : false;
  const showNextArrow = numberOfRowsPerPage * (currentPage) < maxFetchCount;
  const prevPage = currentPage < 2 ? 1 : currentPage + -1
  const nextPage = showNextArrow ? currentPage + 1 : currentPage;
  return (
    <NavContainer aria-label="Page navigation">
      {showTextCount &&
        <StyledUl>
          <StyledLi className="no-border">{displayText}</StyledLi>
        </StyledUl >}
      <StyledUl>
        <StyledLi onClick={() => { setPage(prevPage) }}>
          <StyledNavLink href="#"><ArrowBackIcon /></StyledNavLink>
        </StyledLi>
        {pageButtons(currentPage, maxPagination, setPage)}

        <StyledLi onClick={() => { setPage(nextPage) }}>

          <StyledNavLink href="#"><ArrowForwardIcon /></StyledNavLink>
        </StyledLi>
      </StyledUl>
    </NavContainer>
  );

}

function pageButtons(currentPage: number, maxPagination: number, setPage: (page: number) => void) {
  const listArray = [];
  const minPag = Math.max(Math.min(maxPagination - PAGINATION_SIZE, currentPage - 2), 1);
  const maxPag = Math.min(Math.max(PAGINATION_SIZE, currentPage + 2), maxPagination);
  for (let i = minPag; i <= maxPag; i++) {
    const item = i === currentPage ?

      <StyledLi key={i} onClick={() => { setPage(i) }} >
        <StyledNavLink className="active" href="#">{i}</StyledNavLink>
      </StyledLi>
      :
      <StyledLi key={i} onClick={() => { setPage(i) }} >
        <StyledNavLink className="page-link" href="#">{i}</StyledNavLink>
      </StyledLi>;
    listArray.push(item);
  }
  return listArray;
}