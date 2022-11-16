import { useEffect } from "react";
import { MeasurePercentage } from "./measurePercentage";
import "./progress_bar.css";
const ProgressBar = ({ totalActivities, activitiesCompleted }) => {
  useEffect(() => {
    
    const barProgress = document.querySelector('.progress-bar');
    const percentage = activitiesCompleted / totalActivities;
    barProgress.style.width = (percentage*100) + "%";
    
  }, []);

  return (
    <>
   
      <div className="container">
        <div className="progress-bar__container">
          <div className="progress-bar">
          
          </div>
        </div>
      </div>
    </>
  );
};

export { ProgressBar };
