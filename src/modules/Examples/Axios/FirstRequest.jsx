import { useEffect } from "react";
import axios from "axios";
import { url } from "../../../App";

const FirstRequest = () => {
    const fetchData = async () => {
        try {
            const response = await axios (url);
            const data = response.data;
            console.log(data);
            // const link = data.url;
            // console.log(link);
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
    fetchData();
  }, []);
};

export default FirstRequest;
