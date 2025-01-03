import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { fetchApiResult, fetchApiResultJson } from "../services/getAiOutput";
import { useDispatch, useSelector } from "react-redux";
import { checkExcelFile } from "../services/handleExcelFiles";
import { setApiKey } from "../store/apiKeySlice";
import EntityValidationPopup from "./EntityValidationPopup";

const fileTypes = ["JPG", "PNG", "PDF", "XLSX", "CSV"];

const Body = () => {
  const [fileList, setFileList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [popupData, setPopupData] = useState(null); 
  const [popupEntityType, setPopupEntityType] = useState(""); 
  const [json, setJson] = useState('');
  const dispatch = useDispatch();
  const apiKey = useSelector((state) => state.apiKey.key);

  const handleApiSubmit = (e) => {
    e.preventDefault();
    dispatch(setApiKey(inputValue));
  };

  const handleChange = (files) => {
    console.log("Files received:", files);
    const filesArray = Array.isArray(files) ? files : Array.from(files);
    setFileList((prevList) => [...prevList, ...filesArray]);

    filesArray.forEach((file) => {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (["jpg", "png", "pdf"].includes(fileExtension)) {
        setJson(fetchApiResult(file, apiKey, dispatch));
      } else {
        checkExcelFile(file).then((promisedData) => {
          console.log(promisedData);
          setJson(fetchApiResultJson(promisedData, apiKey, dispatch));
        });
      };

      if(json){
        console.log(json);
      }
    });
  };


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="flex p-2 mt-4 mb-8">
        <input
          type="text"
          placeholder="Enter your Gemini API Key"
          className="mx-4 p-4 rounded-lg border-black min-w-96"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="p-3 bg-green-500 text-black rounded-lg"
          onClick={handleApiSubmit}
        >
          Submit
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Upload Your Invoices Here
        </h1>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          multiple={true}
        />
        <div className="mt-4">
          {fileList.length > 0 ? (
            <ul className="space-y-2">
              {fileList.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 bg-gray-50 border rounded-lg"
                >
                  <span className="text-gray-700">{file.name}</span>
                  <span className="text-sm text-gray-500">{file.type}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 text-center">
              No files uploaded yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
