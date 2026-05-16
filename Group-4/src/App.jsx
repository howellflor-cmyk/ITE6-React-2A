import { BrowserRouter, Routes, Route } from "react-router-dom"
import MCO from "./pages/mco/mco"
import Activity1 from "./pages/activity1/Home"
import Activity2 from "./pages/activity2/Moodswing"
import Activity3 from "./pages/activity3/Activity3"
import Activity4 from "./pages/activity4/Titan"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MCO />} />
        <Route path="/activity1" element={<Activity1 />} />
        <Route path="/activity2" element={<Activity2 />} />
        <Route path="/activity3" element={<Activity3 />} />
        <Route path="/activity4" element={<Activity4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;