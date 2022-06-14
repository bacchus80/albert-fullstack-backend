import useFetch from "react-fetch-hook";
import { apiRoutes } from "../apiRoutes";
import { Film } from "../../models";

interface ApiResult {
  /** Total found conut */
  count: number;
  /** Url to next found set */
  next: string | null;
  /** Url to previous found set */
  previous: string | null;
  /** Data */
  results: Film[];
}

/** Find all movies */
export function useFindMovies(){
  const { isLoading, data: result, error } = useFetch<ApiResult | undefined>(apiRoutes.movies);
  const totalCount = result?.count;
  const data = result?.results ?? [];
  return { isLoading, data, error, totalCount };
}
