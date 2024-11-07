import axios from "axios";
import "./App.css";
import Card from "./components/card/Card";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to an array
    setSelectedFiles(files);
  };
  const FetchData = async () => {
    const response = await axios.get("http://localhost:5000/todos");
    const resdata = await response.data;
    if (resdata) {
      setData(resdata);
    }
  };
  console.log(data);
  useEffect(() => {
    FetchData();
  }, []);
  useEffect(() => {
    const incompleteTasks = data.filter((task) => task.type === "incomplete");
    setIncompleteTasks(incompleteTasks);
    const todoTasks = data.filter((task) => task.type === "todo");
    setTodoTasks(todoTasks);
    const doingTasks = data.filter((task) => task.type === "doing");
    setDoingTasks(doingTasks);
    const completedTasks = data.filter((task) => task.type === "complete");
    setCompletedTasks(completedTasks);
  }, [data]);

  const uploadfileHandle = (e) => {
    setModal(true);
  };
  return (
    <>
      <div className="flex overflow-x-scroll box-border">
        <Card
          title="Incomplete"
          color="bg-red-500"
          data={incompleteTasks}
          uploadfileHandle={uploadfileHandle}
        />
        <Card
          title="To Do"
          color="bg-blue-500"
          data={todoTasks}
          uploadfileHandle={uploadfileHandle}
        />
        <Card
          title="Doing"
          color="bg-yellow-500"
          data={doingTasks}
          uploadfileHandle={uploadfileHandle}
        />
        <Card
          title="Completed"
          color="bg-green-500"
          data={completedTasks}
          uploadfileHandle={uploadfileHandle}
        />
      </div>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Upload Files</h2>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="block w-full mb-4"
            />

            {selectedFiles.length > 0 && (
              <ul className="bg-gray-100 p-3 rounded-md">
                {selectedFiles.map((file, index) => (
                  <li
                    key={index}
                    className="text-sm p-1 border-b last:border-b-0"
                  >
                    {file.name} ({file.name.split(".").pop()})
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={() => {
                setSelectedFiles([]);
                setModal(false);
              }}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
