import "./App.css";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <div className="grid grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
