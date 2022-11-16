import { useContext, useEffect, useState } from "react";
import Axios from 'axios'
import { countActivitiesCompleted } from "../components/ListActivities/countActivitiesCompleted";
import { ListActivitiesItem } from "../components/ListActivities/listActivities_item";
import { ListActivities } from "../components/ListActivities/list_activities";
import { SearchActivitiesStudent } from "../components/ListActivities/searchActivitiesStudent";
import { ProgressBar } from "../components/ProgressBar/progress_bar";
import { MatterContext } from "../context/matter_context";
import { StudentContext } from "../context/student_context";
import { getActivities } from "../services/activities";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const { matter } = useContext(MatterContext);
  const {activitiesCompleted,setActivitiesCompleted,student,setStudent } = useContext(StudentContext);

  useEffect(() => {
      Axios.get(`http://localhost:3001/activities/${matter.id}`)
          .then(res => {
              setStudent(res.data.student);
              setActivities(res.data.result)
      })
      
  }, []);
  return (
      <>
          {
              activities.length > 0
                  ? <ProgressBar totalActivities={activities.length} activitiesCompleted={countActivitiesCompleted(activities,student)} />
                  :<h1>No hay tareas por realizar</h1>
          }
      
      <ListActivities>
        {activities.map((value) => {
          return (
            <ListActivitiesItem
              key={value._id}
              id={value._id}
              name={value.name}
              date={value.date}
              hour={value.hour}
            />
          );
        })}
      </ListActivities>
    </>
  );
};

export { Activities };
