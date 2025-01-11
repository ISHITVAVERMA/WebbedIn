import "./App.css";
import { Provider } from "../src/components/ui/provider";
import { Landing } from "/Users/i_shit/Desktop/my/src/pages/Landing.tsx";

function App() {
  return (
    <Provider>
      <Landing></Landing>
    </Provider>
  );
}

export default App;
