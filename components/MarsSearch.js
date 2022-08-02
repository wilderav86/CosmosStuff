import SearchBar from "../components/searchbar/SearchBar";
import NextButtons from "./buttons/NextButtons";
import DropDown from "./dropdown/DropDown";

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

  //SearchBar and Button props
  const maxSol = roverData.rover.max_sol;
  const minSol = 1;
  const valid = sol >= minSol && sol <= maxSol;

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
          defaultTerm={maxSol}
          setSearchTerm={setSol}
          valid={valid}
          invalidMessage={`Invalid Sol Value! ${sol} is not within the search range`}
          type="number"
          min={minSol}
          max={maxSol}
          placeholder={`Max Sol: ${roverData.rover.max_sol}`}
          label={""}
        />
      </div>
      <NextButtons
        increment={sol + 1}
        decrement={sol - 1}
        min={minSol}
        max={maxSol}
        state={sol}
        setState={setSol}
      />
    </>
  );
};

export default MarsSearch;
