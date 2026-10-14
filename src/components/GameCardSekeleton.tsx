import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSekeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSekeleton;
