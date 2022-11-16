const MeasurePercentage = (totalActivities,ActivitiesCompleted) => {
    
    const barProgress = document.querySelector('.progress-bar');
    const percentage = ActivitiesCompleted / totalActivities;
    console.log(ActivitiesCompleted)
    barProgress.style.width = percentage + "%";
}
export { MeasurePercentage };