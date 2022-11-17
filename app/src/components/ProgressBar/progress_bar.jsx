import { useEffect } from "react";
import { MeasurePercentage } from "./measurePercentage";
import "./progress_bar.css";
const ProgressBar = ({ id, totalActivities, activitiesCompleted }) => {
  useEffect(() => {
    
    const barProgress = document.getElementById(id);
    
    const percentage = activitiesCompleted / totalActivities;
    console.log(activitiesCompleted)
    barProgress.style.width = (percentage*100) + "%";
    
  }, []);

  return (
    <>
   
      <div className="container">
        <div className="progress-bar__container">
          <div id={ id} className="progress-bar">
          
          </div>
        </div>
      </div>
    </>
  );
};

export { ProgressBar };
