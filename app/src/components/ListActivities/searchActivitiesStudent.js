
const SearchActivitiesStudent = (idActivity, Student) => {
    
    
    const query = Student.activities.find(value => value === idActivity);
    
    
    return (query) ? true : false;

}
export {SearchActivitiesStudent}