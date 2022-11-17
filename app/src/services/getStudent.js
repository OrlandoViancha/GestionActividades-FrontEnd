import Axios from "axios";
import { getApiUrl } from "../config";

const getStudent = (state) => {
    const apiUrl = getApiUrl("/students/63762573e5d7321dbfd845ef");
    Axios.get(apiUrl).then((res) => state(res.data));
}

export { getStudent };