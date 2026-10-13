import { HStack, Switch, Text } from "@chakra-ui/react";
import { useTheme } from "next-themes";

const ColorModeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const handleToggle = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";

    console.log("Changing theme to:", newTheme);

    setTheme(newTheme);
  };

  return (
    <HStack gap={3}>
      <Switch.Root
        colorPalette='green'
        name="color-mode"
        checked={isDark}
        onCheckedChange={(details) => handleToggle(details.checked)}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>

      <Text>Dark Mode: {resolvedTheme}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
