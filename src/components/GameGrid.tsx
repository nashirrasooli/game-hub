import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import LoadingSkeleton from './LoadingSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props {
  selectedGenre: Genre | null;
  selectedPlaftform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlaftform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlaftform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding='10px'
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <LoadingSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;