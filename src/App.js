import { FocusContext, init, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import './App.css';
import ReactPlayer from './Component/React Player/index'

function App() {
  const { ref, focusKey } = useFocusable();
  init({
    debug: true,
    visualDebug: false,
  });
  return (
    <div className="App">
     <ReactPlayer />
    </div>
  );
}

export default App;
