// GetQuizReport.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TeacherSidebar from "../Sidebar/TeacherSidebar";

function GetQuizReport() {
  const quiz_id = useParams().quiz_id;
  const [results, setResults] = useState([]);

  const fetchQuizResults = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/result/${quiz_id}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching quiz results:", error);
    }
  };

  useEffect(() => {
    fetchQuizResults();
  }, []);

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();
    return { date, time };
  };

  return (
    <div>
      <TeacherSidebar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Report for the {quiz_id} quiz
        </h1>

        {results.length > 0 ? (
          <table className="table-auto mx-auto bg-white rounded-lg shadow-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                {/*<th className="px-4 py-2">ID</th>*/}
                <th className="px-4 py-2">User ID</th>
                <th className="px-4 py-2">Score</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.id} className="bg-gray-100">
                  {/*<td className="px-4 py-2">{result.id}</td>*/}
                  <td className="px-4 py-2">{result.user_id}</td>
                  <td className="px-4 py-2">{result.score}</td>
                  <td className="px-4 py-2">
                    {formatDateTime(result.submitted_time).date}
                  </td>
                  <td className="px-4 py-2">
                    {formatDateTime(result.submitted_time).time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600">
            No results found for this quiz.
          </p>
        )}
      </div>
    </div>
  );
}

export default GetQuizReport;
