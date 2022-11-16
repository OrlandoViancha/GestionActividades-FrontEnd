import { useContext, useEffect } from "react";
import { StudentContext } from "../../context/student_context";
import { ButtonListItem } from "./button_listItem";
import { countActivitiesCompleted } from "./countActivitiesCompleted";
import { SearchActivitiesStudent } from "./searchActivitiesStudent";

const ListActivitiesItem = ({ id, name, date, hour }) => {

    const { student } = useContext(StudentContext);
    
   
    return (
    <>
      
          <div className="ActivityItem-container">
            <h2>{name}</h2>
            <h2>{date + " " + hour}</h2>
            {SearchActivitiesStudent(id, student) ? (
              <p>Entregado</p>
            ) : (
              <ButtonListItem idActivity={id} idStudent={student._id}></ButtonListItem>
            )}
          </div>
        
    </>
  )
};

export { ListActivitiesItem };
