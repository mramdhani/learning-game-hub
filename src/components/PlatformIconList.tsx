import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch, BsGlobe, BsQuestionCircle } from "react-icons/bs";
import { SiAtari, SiCommodore, SiSega } from "react-icons/si";
import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    atari: SiAtari,
    sega: SiSega,
    "commodore-amiga": SiCommodore,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          // RAWG returns more parent platforms than the ones mapped above
          // (e.g. 3do, neo-geo), so always fall back to a generic icon.
          as={iconMap[platform.slug] ?? BsQuestionCircle}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
