import { useEffect, useState } from "react";
import Axios from "axios"
import { TableCalifications } from "../components/table_califications/table_califications";
import { getStudent } from "../services/getStudent";
import { getMatters } from "../services/getMatters";

const Califications = () => {
    const [matters,setMatters]=useState([]);
    const [student,setStudent]=useState([]);
    const [activities,setActivities]=useState([]);
    useEffect(() => {

        getStudent(setStudent);
        getMatters(setMatters);
        Axios.get("http://localhost:3001/activities").then((res) => {
            setActivities(res.data);
        }); 
        
       
    },[])
    
    return <>
        
        <TableCalifications student={student} matters={matters} activities={activities} />
    </>
}

export { Califications };