import { ProgressBar } from "../ProgressBar/progress_bar";
import { MatterContext } from "../../context/matter_context";
import { useContext } from "react";
const ListItem = ({ id, name, activities, student }) => {
  
  const { setMatter } = useContext(MatterContext);
  const countActivitiesCompleted = (Activities, Student) => {
    var suma = 0;
    Activities.map((activity) => {
      
      const query = Student.activities.find((value) => value.id === activity);

      if (query) {
        suma = suma + 1;
      }
    });

    return suma;
  };

  return (
    <>
      
      
          
          <div
          onClick={(e) => {
            setMatter({ id: id, name: name });
            window.location.href = "./activities";
            }}
            className="card-itemMatter"
          >
            <b>{name}</b>
            {
              activities.length > 0
            ?
            <ProgressBar id={ id} totalActivities={activities.length} activitiesCompleted={countActivitiesCompleted(activities,student)}/>
           
           :<ProgressBar/>
            } 
              {countActivitiesCompleted(activities, student)} de {activities.length}

           
            
          </div>
             
      
      
    </>
  );
};

export { ListItem };
