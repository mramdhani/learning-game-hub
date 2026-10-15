import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";



const SortSelector = () => {

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance <BsChevronDown/>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="Relevance">Relevance</Menu.Item>
            <Menu.Item value="Relevance">Date added</Menu.Item>
            <Menu.Item value="Relevance">Name</Menu.Item>
            <Menu.Item value="Relevance">Release date</Menu.Item>
            <Menu.Item value="Relevance">Popularity</Menu.Item>
            <Menu.Item value="Relevance">Average rating</Menu.Item>
            
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
