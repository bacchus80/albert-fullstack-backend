import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export interface CardContainerListProps {
  /** list title */
  title: string;
  /** list data */
  data: string;
  /** number of items for skeletons */
  numberOfItems: number;
}

export function CardContainerList({ title, data, numberOfItems }: CardContainerListProps) {
  return (<>
    <div className="title">{title}</div>
    <div className="main">{
      numberOfItems === 0 ? "None" :
        data === "" ?
          Array(numberOfItems).fill(null)
            .map((_, index) => (
              <div style={{ padding: "2px 4px" }} key={index}><Skeleton /></div>
            )) :
          data.split("|").map((item, index) => <div key={index}>{item}</div>)}
    </div>
  </>);
}