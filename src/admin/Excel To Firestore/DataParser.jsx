import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function DataParser() {
  const { isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  //Pop up Welcome Notification
  const notify = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  // useEffect(() => {
  //   if (!isAdmin) {
  //     notify("x");
  //     navigate("/");
  //   }
  //   else{
  //       notify("Welcome to the Admin Space");
  //   }
  // }, []);
  // State to store parsed data
  const [ParsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse

    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values

        // eslint-disable-next-line array-callback-return
        results.data.map((d) => {
          // eslint-disable-next-line array-callback-return
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  const DataInserter = () => {
    ParsedData?.map(async (toolData) => {
        const uid = uuid();
      await setDoc(doc(db, "Tools", uid), {
        id: uid,
        Name: toolData.Name,
        Description: toolData.Description,
        Price: toolData.Price,
        VideoURL: "",
        URL: toolData.URL,
        Category: toolData.Category,
        LikedBy: [],
        Icon: toolData.Icon,
        Keywords: toolData.Keywords,
      });
      // console.log(toolData);
    });
  };

  return (
    <div>
      {/* File Uploader */}
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        className="block mt-10 p-2 w-full text-blue-700 bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {tableRows?.length > 0 ? (
        <button className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => DataInserter()}>
          Import
        </button>
      ) : null}
      <table className="mt-10">
        <thead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
          <tr className="border border-black">
            {tableRows.map((rows, index) => {
              return (
                <th className="text-blue-500" key={index}>
                  {rows}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {values.map((value, index) => {
            return (
              <tr
                className="border border-black hover:bg-grey-100 hover:[&:nth-child(odd)]:bg-blue-200 hover:[&:nth-child(even)]:bg-blue-200 [&:nth-child(odd)]:bg-dark-300 "
                key={index}
              >
                {value.map((val, i) => {
                  return (
                    <td
                      className="px-6 py-4 whitespace-pre-line border border-black"
                      key={i}
                    >
                      {val}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default DataParser;
