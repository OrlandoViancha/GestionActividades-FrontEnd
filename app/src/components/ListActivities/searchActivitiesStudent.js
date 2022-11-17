
const SearchActivitiesStudent = (idActivity, Student) => {
    
    
    const query = Student.activities.find(value => value.id === idActivity);
    
    
    return (query) ? true : false;

}
export {SearchActivitiesStudent}