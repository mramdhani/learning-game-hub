import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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

      <GridItem hideBelow="lg" area="aside" bg="bg.subtle" p={4}>
        Aside
      </GridItem>

      <GridItem area="main" bg="bg" p={4}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
