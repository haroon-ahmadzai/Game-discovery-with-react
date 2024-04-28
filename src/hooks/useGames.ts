import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "../hooks/usePlatform";
import { GameQuery } from "../App";

export interface Platforms {
  platform: any;
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>("/games", [gameQuery], {
    params: { 
      genres: gameQuery.genre?.id, 
      platforms: gameQuery.platform?.id,
      ordering:gameQuery.sortOrder ,
      search: gameQuery.searchText
    },
  });
export default useGames;
