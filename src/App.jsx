import "./App.css";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <div className="flex overflow-x-scroll box-border">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
