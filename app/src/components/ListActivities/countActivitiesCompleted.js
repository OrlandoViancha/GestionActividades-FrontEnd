const countActivitiesCompleted = (Activities, Student) => {
    var suma = 0;
    Activities.map(activity => {
        const query = Student.activities.find(value => value === activity._id);
       
        if (query) {
         
            suma = suma + 1;
           
        }
        
       
    })
    
    return suma;
}

export { countActivitiesCompleted };