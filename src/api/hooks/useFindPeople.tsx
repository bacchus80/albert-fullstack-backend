import useFetch from "react-fetch-hook";
import { apiRoutes } from "../apiRoutes";
import { People } from "../../models";


interface ApiResult {
  /** Total found conut */
  count: number;
  /** Url to next found set */
  next: string | null;
  /** Url to previous found set */
  previous: string | null;
  /** Data */
  results: People[];
}

export interface useFindPeopleProps {
  page: number;
}

/** Find multiple people */
export function useFindPeople({page = 0}:useFindPeopleProps){
  const { isLoading, data: result, error } = useFetch<ApiResult | undefined>(apiRoutes.findPeople+"?page="+page);
  const totalCount = result?.count;
  const data = result?.results ?? [];
  return { isLoading, data, error, totalCount };
}
