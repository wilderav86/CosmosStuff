import { useApi, useUrl } from "../hooks";

const MarsSearchDropDown = ({ selected, setSelected }) => {
  const url = useUrl(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/",
    { api_key: "hUaQ4htFc7b07hk6RynOrGN4S6V5wJaTY1xcdDRJ" }
  );

  const { data } = useApi(url);

  console.log(data);

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
    // {
    //   cameraCode: "RHAZ",
    //   cameraName: "Rear Hazard Avoidance Camera",
    // },
    // {
    //   cameraCode: "MAST",
    //   cameraName: "	Mast Camera",
    // },
    // {
    //   cameraCode: "CHEMCAM",
    //   cameraName: "Chemistry and Camera Complex",
    // },
    // {
    //   cameraCode: "MAHLI",
    //   cameraName: "Mars Hand Lens Imager",
    // },
    // {
    //   cameraCode: "NAVCAM",
    //   cameraName: "Navigation Camera",
    // },
  ];

  const renderOptions = cameraOptions.map((option) => {
    return <option value={option.cameraCode}>{option.cameraName}</option>;
  });

  return (
    <div className="dropdown-container">
      <form>
        <label for="camera">Choose a camera</label>
        <select
          onChange={(e) => setSelected(e.target.value)}
          value={selected}
          id="camera"
          name="camera"
        >
          {renderOptions}
        </select>
      </form>
    </div>
  );
};

export default MarsSearchDropDown;
