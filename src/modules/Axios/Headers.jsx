import { useState } from "react";
import axios from "axios";

const url = "https://www.dnd5eapi.co/api/equipment-categories/adventuring-gear";

const Headers = () => {
  const [equipment, setEquipment] = useState("random equipment");

  const fetchEquipment = async () => {
    try {
      const { data } = await axios(url,{
        headers: 'application/json'
      });
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return <button onClick={fetchEquipment}>{equipment}</button>;
};

export default Headers;
