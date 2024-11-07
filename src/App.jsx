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
  const [underReviewTasks, setUnderReviewTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [eror, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };
  const FetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://seo-page-backend.onrender.com/todos"
    );
    const resdata = await response.data;
    if (resdata) {
      setData(resdata);
    } else {
      setError(true);
    }
    setLoading(true);
  };
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
    const underReviewTasks = data.filter(
      (task) => task.type === "under-review"
    );
    setUnderReviewTasks(underReviewTasks);
  }, [data]);

  const uploadfileHandle = (e) => {
    setModal(true);
    setCurrentUser(e);
  };
  const handleSubmit = async () => {
    if (selectedFiles.length === 0) {
      window.alert("Please Choose a File");
      return;
    }
    try {
      const fileNames = selectedFiles.map((file) => file);

      const response = await axios.post(
        "https://seo-page-backend.onrender.com/add-file",
        {
          userId: currentUser.id,
          fileNames: fileNames,
        }
      );
      console.log(response.status);
      setSelectedFiles([]);
      window.alert("Upload Success");
    } catch (error) {
      console.error(
        "Error adding files:",
        error.response?.data?.message || error.message
      );
      setError(true);
    } finally {
      setModal(false);
      FetchData();
    }
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
        <Card
          title="Under Review"
          color="bg-blue-500"
          data={underReviewTasks}
          uploadfileHandle={uploadfileHandle}
        />
      </div>
      {eror && (
        <div className="text-red-500 text-center p-4 rounded-md shadow-md">
          Error: Failed to Load Data!
        </div>
      )}
      {!loading && (
        <div className="flex items-center justify-center space-x-2 text-black p-4 rounded-md shadow-md text-lg font-semibold">
          <svg
            className="animate-spin h-5 w-5 text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              strokeWidth="4"
              className="text-white"
            />
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M4 12a8 8 0 0 1 16 0"
            />
          </svg>
        </div>
      )}
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
                    {file.name}
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={() => {
                setSelectedFiles([]);
                setModal(false);
                setCurrentUser(null);
              }}
              className="mt-4 px-6 py-1 bg-blue-500 text-white rounded-md"
            >
              Close
            </button>
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="mt-4 px-6 py-1 bg-green-500 text-white rounded-md ml-4"
            >
              Upload Files
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
