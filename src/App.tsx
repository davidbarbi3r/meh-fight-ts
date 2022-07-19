/* Known bugs :
 */

/* To be implemented : 
  - Crit / Missed / normal dmg with attack cards,
  - multiple enemies in same fight ? 
  - Fight animations
*/
import "./index.css"

import Game from "./modules/game/components/Game";

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
