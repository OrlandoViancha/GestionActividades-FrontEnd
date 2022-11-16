import { updateStateActivity } from "../../services/activities";

const ButtonListItem = ({idActivity,idStudent}) => {
    
    return <>
        <button className="btn" onClick={e=>updateStateActivity(idActivity,idStudent)}>Entregar</button>
    </>
}

export { ButtonListItem };