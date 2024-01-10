import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

import { apiHelper } from '../helpers/ApiHelper';

export default function Problems() {
  // Sample data for frontend problems
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const getAllProblems = async () => {
      try {
        const res = await apiHelper('problems/getall', 'GET'); // Changed to 'GET'
        setProblems(res);
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    }
  
    getAllProblems();
  }, []);
  
  

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        {/* <h1 className="text-2xl font-bold mb-4"></h1> */}
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-secondary-background text-white">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Difficulty</th>
              <th className="px-4 py-2">Language</th>
              <th className="px-4 py-2">Completion</th>
            </tr>
          </thead>
          <tbody>
            {problems && problems.map((problem) => (
              <tr className="border-b border-l border-r border-gray-200 hover:bg-custom-green">
                <td className="px-4 py-2 text-center">{problem.id}</td>
                <td className="px-4 py-2 text-center">
                  <Link to={`/problems/${problem.id}`} className="link-underline">
                    {problem.name}
                  </Link>
                </td>
                <td className="px-4 py-2 text-center">{problem.difficulty}</td>
                <td className="px-4 py-2 text-center">{problem.language}</td>
                <td className="px-4 py-2 text-center"><p>TODO...</p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
