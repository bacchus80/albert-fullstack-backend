import useFetch, {HookOptions} from "react-fetch-hook";
import { apiRoutes } from "../apiRoutes";
import { Planet } from "../../models";

export interface useFetchPlanetProps {
  /** Planed ID */
  id: number;
}

/** Return a planet object */
export function useFetchPlanet({ id }: useFetchPlanetProps){
  const options: HookOptions = {
    mode: "cors",
    cache: "force-cache",
  }
  const { data: planet } = useFetch<Planet>(apiRoutes.planets + id, options);
  return { planet };
}


