import { Index } from "../views"
import { Activities } from "../views/activities"
import { Califications } from "../views/califications"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

const RoutesComponent = () => {
    
    return (
        <Router>
        <Routes>
            <Route path="/" exact element={<Index/> } />
            <Route path="/activities" exact element={<Activities/> }/>
            <Route path="/califications" exact element={ <Califications/>}/>
        </Routes>
    </Router>
    )   
}

export { RoutesComponent };