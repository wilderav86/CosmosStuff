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
  console.log("marsSearch roverData", roverData);

  //Dropdown props
  const dropdownLabel = { text: "Choose a camera", elementProps: "camera" };

  const cameraOptions = [
    {
      cameraCode: "NAVCAM_LEFT",
      cameraName: "Navigation Camera - Left",
    },
    {
      cameraCode: "NAVCAM_RIGHT",
      cameraName: "Navigation Camera - Right",
    },
    {
      cameraCode: "MCZ_RIGHT",
      cameraName: "Mast Camera Zoom - Right",
    },
    {
      cameraCode: "MCZ_LEFT",
      cameraName: "Mast Camera Zoom - Left",
    },
    {
      cameraCode: "FRONT_HAZCAM_LEFT_A",
      cameraName: "Front Hazard Avoidance Camera - Left",
    },
    {
      cameraCode: "FRONT_HAZCAM_RIGHT_A",
      cameraName: "Front Hazard Avoidance Camera - Right",
    },
    {
      cameraCode: "SKYCAM",
      cameraName: "MEDA Skycam",
    },
  ];

  const defaultSol = roverData.rover.max_sol;

  return (
    <>
      <div>
        <DropDown
          options={cameraOptions}
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
