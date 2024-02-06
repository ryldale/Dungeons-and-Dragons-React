import { useEffect } from "react";

import authFetch from "../Axios/CustomAxios";
import axios from "axios";

const randomUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
    const fetchData = async () =>{
        try {
            const resp1 = await authFetch('/api/equipment-categories/adventuring-gear');
            const resp2 = await axios(randomUrl);
            console.log(resp1,resp2);
        } catch (error) {
            
        }
    };
    useEffect(() => {
        fetchData();
    },[]);

}

export default CustomInstance;