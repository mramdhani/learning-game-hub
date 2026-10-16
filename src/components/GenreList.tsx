import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Flex, Heading, Image, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading>Genres</Heading>
      <List.Root listStyle="none">
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <Flex gap={2}>
              <Image
                boxSize="32px"
                borderRadius="8px"
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                paddingX={0}
                whiteSpace="nowrap"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="plain"
                _hover={{ textDecoration: "underline" }}
              >
                {genre.name}
              </Button>
            </Flex>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
