import "./App.css";
import Bottom from "./components/class/Bottom";
import Top from "./components/class/Top";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top />
        <h1>welcome to simple app</h1>
        <h2>good morning</h2>
        <Bottom />
      </header>
    </div>
  );
}

export default App;
