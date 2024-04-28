import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";
import './index.css';
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre
  platform: Platform
  sortOrder:string
  searchText:string
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        md: `"nav" "aside main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        {" "}
        <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={"5px"}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSort={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
