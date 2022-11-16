import Axios from "axios";
import { getApiUrl } from "../config";

export const getMatters = (state) => {
  const apiUrl = getApiUrl("/matters");
  Axios.get(apiUrl).then((res) => state(res.data.result));
};
