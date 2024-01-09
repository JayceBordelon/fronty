import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Problems() {
  // Sample data for frontend problems
  const problems = [
    { id: 1, name: 'React State Challenge', difficulty: 'Easy', language: 'React', completion: '80%' },
    { id: 2, name: 'Responsive Design Layout', difficulty: 'Medium', language: 'CSS', completion: '60%' },
    { id: 3, name: 'HTML Forms Deep Dive', difficulty: 'Easy', language: 'HTML', completion: '90%' },
    { id: 4, name: 'Flexbox Navigation Bar', difficulty: 'Easy', language: 'CSS', completion: '85%' },
    { id: 5, name: 'JavaScript DOM Manipulation', difficulty: 'Medium', language: 'JavaScript', completion: '70%' },
    { id: 6, name: 'React Hooks Overview', difficulty: 'Medium', language: 'React', completion: '65%' },
    { id: 7, name: 'CSS Grid for Blog Layout', difficulty: 'Medium', language: 'CSS', completion: '75%' },
    { id: 8, name: 'SVG Animation with CSS', difficulty: 'Hard', language: 'SVG/CSS', completion: '50%' },
    { id: 9, name: 'Single Page Application with Vue', difficulty: 'Hard', language: 'Vue.js', completion: '55%' },
    { id: 10, name: 'Interactive Components with React', difficulty: 'Medium', language: 'React', completion: '60%' },
    { id: 11, name: 'Semantic HTML Best Practices', difficulty: 'Easy', language: 'HTML', completion: '95%' },
    { id: 12, name: 'Advanced CSS Selectors', difficulty: 'Medium', language: 'CSS', completion: '80%' },
    { id: 13, name: 'JavaScript Event Handling', difficulty: 'Easy', language: 'JavaScript', completion: '90%' },
    { id: 14, name: 'Vue.js Reactive Data', difficulty: 'Medium', language: 'Vue.js', completion: '60%' },
    { id: 15, name: 'React Context API', difficulty: 'Medium', language: 'React', completion: '70%' },
    { id: 16, name: 'Web Accessibility Fundamentals', difficulty: 'Medium', language: 'HTML/CSS', completion: '80%' },
    { id: 17, name: 'HTML Canvas and JavaScript', difficulty: 'Hard', language: 'JavaScript', completion: '45%' },
    { id: 18, name: 'Building Forms with Vue.js', difficulty: 'Easy', language: 'Vue.js', completion: '85%' },
    { id: 19, name: 'CSS Variables and Theming', difficulty: 'Easy', language: 'CSS', completion: '90%' },
    { id: 20, name: 'Animations with React and CSS', difficulty: 'Medium', language: 'React/CSS', completion: '60%' },
    { id: 21, name: 'Responsive Images and Media', difficulty: 'Easy', language: 'HTML/CSS', completion: '95%' },
  ];
  

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
            {problems.map((problem) => (
              <tr className="border-b border-l border-r border-gray-200 hover:bg-custom-green">
                <td className="px-4 py-2 text-center">{problem.id}</td>
                <td className="px-4 py-2 text-center">
                  <Link to={`/problems/${problem.id}`} className="link-underline">
                    {problem.name}
                  </Link>
                </td>
                <td className="px-4 py-2 text-center">{problem.difficulty}</td>
                <td className="px-4 py-2 text-center">{problem.language}</td>
                <td className="px-4 py-2 text-center">{problem.completion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
