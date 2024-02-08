import axios from "axios";
import { useEffect } from "react";
import { url } from "../../../App";
const randomUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    const response1 = await axios(url);
    // const response2 = await axios(randomUrl);
    console.log(response1);
  };
  useEffect(() => {
    fetchData();
  }, []);
};

export default GlobalInstance;

// Global Instance - for no security issue
// Custom Instance - more details setup, specific request
