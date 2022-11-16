import { useEffect, useState } from "react";
import { ListItem } from "../components/ListMatters/listMatters_item";
import { ListMatters } from "../components/ListMatters/list_matters";
import { getMatters } from "../services/getMatters";
import "./index.css";

const Index = () => {
  
  const [matters, setMatters] = useState([]);
  useEffect(() => {
    getMatters(setMatters);
  }, []);

  return (
    <>
      <div className="index-container">
        <h1>Mis Cursos</h1>
        <ListMatters className="listMatters">
          {
            matters.map((value) => {
              return <ListItem key={value._id} id={value._id} name={value.name} numActivities={value.activities.length} />;
          })}
        </ListMatters>
      </div>
    </>
  );
};

export { Index };
