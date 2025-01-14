import { useState } from "react";
import Select from "react-select";
import "./dropdown.css";

type DropdownOption = {
  value: string;
  label: string;
};
const options: Array<DropdownOption> = [
  { value: "vanilla", label: "6 M" },
  { value: "chocolate", label: "1 Y" },
  { value: "strawberry", label: "2 Y" },
];

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    options[0]
  );

  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      classNamePrefix="react-select"
      isSearchable={false}
    />
  );
};

export default DropdownMenu;
