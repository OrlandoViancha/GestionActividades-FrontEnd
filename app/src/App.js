import { RoutesComponent } from "./routes/routes";
import "./App.css";
import { MatterProvider } from "./context/matter_context";
import { StudentProvider } from "./context/student_context";
import { Header } from "./components/Header/header";
function App() {
  return (
    <>
      <MatterProvider>
        <StudentProvider>
          <div className="App">
            <div className="App-Header"><Header/></div>

            <div className="App-Content">
              <RoutesComponent />
            </div>
          </div>
        </StudentProvider>
      </MatterProvider>
    </>
  );
}

export default App;
