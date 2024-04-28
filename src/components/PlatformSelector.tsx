import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data } = usePlatform();
  return (
    <Menu>
      <MenuButton padding={5} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?selectedPlatform.name:'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
