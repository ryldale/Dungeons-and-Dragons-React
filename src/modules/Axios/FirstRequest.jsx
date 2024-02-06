import { useEffect } from "react";
import axios from "axios";

const url = "https://www.dnd5eapi.co/api/equipment-categories/adventuring-gear";

const FirstRequest = () => {
    const fetchData = async () => {
        try {
            const response = await axios (url);
            const data = response.data;
            console.log(data);
            const link = data.url;
            console.log(link);
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
    fetchData();
  }, []);
};

export default FirstRequest;
