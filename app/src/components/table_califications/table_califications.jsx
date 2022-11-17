import "./table_califications.css";
import Axios from "axios";
import { useState } from "react";
const TableCalifications = ({ student, matters, activities }) => {
  const [listactivities, setListactivities] = useState([]);
  const [parcialCalification, setParcialCalification] = useState(0);
  const ViewActivities = () => {
    const matter = document.getElementById("select-matters").value;
    const query = activities.filter((value) => value.matter === matter);
    setListactivities(query);
    setParcialCalification(0);
  };

  const ViewCalifications = (activity) => {
      var calification = 0;
     
    student.activities.map((value) => {
      if (activity == value.id) {
          calification = value.qualification;
      }
    });
    
    return calification == 0 ? "---" : calification;
  };

  return (
    <>
      <h2 className="califications-title">CALIFICACIONES</h2>
      <div className="mainselection">
        <select
          id="select-matters"
          name="State"
          onChange={(e) => {
            ViewActivities();
          }}
        >
          <option></option>
          {matters.map((value) => {
            return <option value={value._id}>{value.name}</option>;
          })}
        </select>
      </div>
      <div className="table-wrapper">
        <table class="fl-table">
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Rango</th>
              <th>Calificación</th>
            </tr>
          </thead>
          <tbody>
            {listactivities.length === 0 ? (
              <tr>
                <td></td>
              </tr>
            ) : (
              listactivities.map((value) => {
                return (
                  <>
                    <tr>
                      <td>{value.name}</td>
                      <td>0-5</td>
                      <td>{ViewCalifications(value._id)}</td>
                    </tr>
                  </>
                );
              })
            )}
            <tr>
              <td>Calificación Parcial</td>
              <td>---</td>
              <td>{parcialCalification > 0 ? parcialCalification : "---"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export { TableCalifications };
