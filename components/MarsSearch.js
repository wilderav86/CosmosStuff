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

  //SearchBar props
  const maxSol = roverData.rover.max_sol;
  const minSol = 1;
  const valid = sol >= minSol && sol <= maxSol;

  //Functions
  const handlePrevious = () => {
    if (sol > 1) {
      setSol(parseInt(sol) - 1);
    }
  };

  const handleNext = () => {
    if (sol < maxSol) {
      setSol(parseInt(sol) + 1);
    }
  };

  console.log(typeof sol);

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
        />
      </div>
      <div>
        <button onClick={handlePrevious} disabled={sol == 1 ? true : false}>
          Previous
        </button>
        <button onClick={handleNext} disabled={sol == maxSol ? true : false}>
          Next
        </button>
      </div>
    </>
  );
};

export default MarsSearch;
