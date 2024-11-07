import axios from "axios";
import "./App.css";
import Card from "./components/card/Card";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const FetchData = async () => {
    const response = await axios.get("http://localhost:5000/todos");
    const resdata = await response.data;
    if (resdata) {
      setData(resdata);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <div className="flex overflow-x-scroll box-border">
        <Card title="Incomplete" color="bg-red-500" />
        <Card title="To Do" color="bg-blue-500" />
        <Card title="Doing" color="bg-yellow-500" />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
