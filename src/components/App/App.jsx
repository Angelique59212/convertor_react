import "./App.css";
import { Convertor } from "../convertor/Convertor";
import { ConvertorCapacity } from "../ConvertorCapacity/ConvertorCapacity";

function App() {
  return (
    <div className="container-convertor">
      <Convertor />
      <ConvertorCapacity />
    </div>
  );
}

export default App;
