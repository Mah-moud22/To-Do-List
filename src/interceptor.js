import axios from "axios";
import myStore from "./store/store"
import { LoaderChange } from "./store/action";

const axiosInstance = axios.create({
    baseURL: "https://fakerestapi.azurewebsites.net/",
});

axiosInstance.interceptors.request.use((req) => {
    myStore.dispatch(LoaderChange(false))
    return req;
}, (err) => {
    return Promise.reject(err);
});
axiosInstance.interceptors.response.use((res) => {
    myStore.dispatch(LoaderChange(true))
    if (res.status === 200) {
        console.log("success");
    }
    return res;
}, (err) => {
    return Promise.reject(err);
});

export default axiosInstance;