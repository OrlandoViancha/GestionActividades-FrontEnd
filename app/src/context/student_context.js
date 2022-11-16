import { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    
    const [student, setStudent] = useState([]);
    const [activitiesCompleted,setActivitiesCompleted] = useState(0);
    return (
        <StudentContext.Provider value={{
            student,
            setStudent,
            activitiesCompleted,
            setActivitiesCompleted
        }}
        >
            {children}
        </StudentContext.Provider>
    )
    
}
