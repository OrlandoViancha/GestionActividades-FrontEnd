import Axios from "axios";
import { getApiUrl } from "../config";

export const getActivities = (id, activities, student) => {
  const Url = getApiUrl(`/activities/${id}`);

  Axios.get(Url).then((res) => {
    activities(res.data.result);
    student(res.data.student);
  });
};

export const updateStateActivity = (idActivity, idStudent) => {
  const Url = getApiUrl(`/activities/${idActivity}`);

  Axios.put(Url, { idStudent: idStudent }).then((res) => {
    if (res.status === 200) {
      window.location.reload();
    }
  });
};
