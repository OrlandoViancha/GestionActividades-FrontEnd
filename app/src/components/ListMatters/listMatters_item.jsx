import { ProgressBar } from "../ProgressBar/progress_bar";
import { MatterContext } from "../../context/matter_context";
const ListItem = ({ id, name, numActivities }) => {
  return (
    <>
      <MatterContext.Consumer>
        {({ setMatter }) => (
          <div
            onClick={(e) => {
              setMatter({ id: id, name: name });
              window.location.href = "./activities";
            }}
            className="card-itemMatter"
          >
            <b>{name}</b>
            <ProgressBar />
                0 de {numActivities}
          </div>
        )}
      </MatterContext.Consumer>
    </>
  );
};

export { ListItem };
