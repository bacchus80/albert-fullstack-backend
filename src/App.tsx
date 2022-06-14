import { useState } from "react"
import './App.css';
import { Pagination, Card, Table } from "./components";
import { ColumnData, People } from "./models";
import { useFindMovies, useFindPeople } from "./api/hooks/";

const PAGE_SIZE = 10;

function App() {
  const { data: movieData } = useFindMovies();
  const [currentTablePage, setCurrentTablePage] = useState<number>(1);
  const { data: peopleData, isLoading, totalCount = 0 } = useFindPeople({ page: currentTablePage });

  const [selectedPeople, setSelectedPeople] = useState<People | undefined>(undefined);

  const showPage = (page: number) => {
    setCurrentTablePage(page);
  };

  const closeDetail = () => {
    setSelectedPeople(undefined);
  };

  const handleClick = (person: People) => {
    setSelectedPeople(person);
  };

  // columns to display
  const columnData: ColumnData[] = [
    {
      columnTitle: "Name",
      fieldName: "name",
      sortable: true,
    },
    {
      columnTitle: "Birth year",
      fieldName: "birth_year",
      sortable: true,
      optionalClassNames: "right",
    },
    {
      columnTitle: "Gender",
      fieldName: "gender",
      sortable: false,
    },
    {
      columnTitle: "Height",
      fieldName: "height",
      sortable: false,
      optionalClassNames: "right",
    },
    {
      columnTitle: "Hair color",
      fieldName: "hair_color",
      sortable: true,
    },
  ];

  return (
    <>
      {selectedPeople === undefined ?
        <>
          <h1>People from the Star Wars movies</h1>
          <Table
            onClick={handleClick}
            data={peopleData}
            columnData={columnData}
            pageSize={PAGE_SIZE}
            optionalClassNames={["", "right", "", "right", ""]}
            isLoading={isLoading} />
          <Pagination
            currentPage={currentTablePage}
            maxFetchCount={totalCount}
            numberOfRowsPerPage={PAGE_SIZE}
            setPage={showPage}
            showTextCount={true}
          />
        </>
        :
        <Card header={selectedPeople.name} close={closeDetail} person={selectedPeople} movieData={movieData} />
      }
    </>
  );
}

export default App;
