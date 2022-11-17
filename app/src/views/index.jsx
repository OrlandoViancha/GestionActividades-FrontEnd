import { useEffect, useState } from "react";
import { ListItem } from "../components/ListMatters/listMatters_item";
import { ListMatters } from "../components/ListMatters/list_matters";
import {getStudent} from "../services/getStudent"
import { getMatters } from "../services/getMatters";
import "./index.css";
import Axios from "axios";
import { getApiUrl } from "../config";
const Index = () => {
  
  const [matters, setMatters] = useState([]);
  const [student, setStudent] = useState([]);
  useEffect(() => {
   
    getStudent(setStudent);
  
    getMatters(setMatters);
    
  }, []);

  return (
    <>
     
        
      <div className="index-container">
        <h1>Mis Cursos</h1>
        {
          (student.length== 0) ? null
          :
        <ListMatters className="listMatters">
          {
            matters.map((value) => {
              
              return <ListItem key={value._id} id={value._id} name={value.name} activities={value.activities} student={student} />;
            })}
        </ListMatters>
          }
      </div>
    </>
  );
};

export { Index };
