import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Game from "./pages/Game";
import "./index.css"

/* To be implemented : 
  - multiple enemies in same fight ? 
*/

function App() {
  return (
      <Routes>
        <Route path="/meh-fight-ts" element={<Home/>}/>
        <Route path="/meh-fight-ts/game" element={<Game />}/>
      </Routes>
  );
}

export default App;
