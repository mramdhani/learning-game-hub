import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      minH="100vh"
      bg="bg"
      color="fg"
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      templateRows={{
        base: "auto 1fr",
        lg: "auto 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem hideBelow="lg" area="aside" paddingX={5}>
        <GenreList/>
      </GridItem>

      <GridItem area="main" bg="bg" p={4}>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
