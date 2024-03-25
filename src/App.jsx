import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Infos from "./pages/Infos/Infos";
import Plan from "./pages/Plan/Plan";
import Add from "./pages/Add/Add";
import SideBar from "./pages/SideBar";
import Summary from "./pages/Summary/Summary";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Infos />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/add" element={<Add />} />
          <Route path="/summary" element={<Summary />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
