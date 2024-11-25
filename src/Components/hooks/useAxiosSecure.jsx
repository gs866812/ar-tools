import axios from "axios";



const axiosSecure = axios.create({
    baseURL: 'https://api.ar.toolscare.net',
});

const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;