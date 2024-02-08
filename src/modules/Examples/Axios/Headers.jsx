import { useState } from "react";
import axios from "axios";
import { url } from "../../../App";

const Headers = () => {
  const [equipment, setEquipment] = useState("random equipment");

  const fetchEquipment = async () => {
    try {
      const { data } = await axios(url,{
        headers: 'application/json'
      });
      setEquipment(data.url);
    } catch (error) {
      console.log(error.response);
    }
  };
  return <button onClick={fetchEquipment}>{equipment}</button>;
};

export default Headers;
