import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSort: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSort, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Averge Rating" },
  ];
  const currenctSortOrder = sortOrders.find(
    (order) => order.value == sortOrder
  );
  return (
    <Menu>
      <MenuButton padding={5} as={Button} rightIcon={<BsChevronDown />}>
        Sort By:{currenctSortOrder ? currenctSortOrder.label : "Relevence"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSort(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
