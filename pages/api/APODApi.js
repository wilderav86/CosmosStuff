import axios from "axios";

export default axios.create({
  baseUrl: "https://api.nasa.gov/planetary/apod",
});
