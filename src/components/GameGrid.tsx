import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSekeleton from "./GameCardSekeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={4} padding='10px'>
        {isLoading && skeletons.map(skeleton => <GameCardSekeleton key={skeleton}/>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
