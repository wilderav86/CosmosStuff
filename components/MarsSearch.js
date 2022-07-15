import { useApi, useUrl } from "../hooks";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";

const MarsSearch = ({
  selectedCamera,
  setSelectedCamera,
  sol,
  setSol,
  loading,
  roverData,
}) => {
  //Dropdown props
  const dropdownLabel = { text: "Choose a camera", elementProps: "camera" };

  const { cameras } = roverData.rover;

  const defaultSol = roverData.rover.max_sol;

  return (
    <>
      <div>
        <DropDown
          options={cameras}
          selected={selectedCamera}
          setSelected={setSelectedCamera}
          label={dropdownLabel}
        />
        <SearchBar
          defaultTerm={defaultSol}
          setSearchTerm={setSol}
          data={roverData}
        />
      </div>
    </>
  );
};

export default MarsSearch;
