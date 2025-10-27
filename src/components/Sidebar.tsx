import React from 'react';
import profilePic from '../assets/8bitme.png';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Profile Picture and Basic Info */}
      <div className="bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 p-4">
        <div className="flex items-start space-x-3">
          <img 
            src={profilePic} 
            alt="Jessica Calderon" 
            className="w-20 h-20 border-2 border-blue-500 dark:border-blue-400 object-cover myspace-light-img-border"
          />
          <div className="flex-1">
          <p className="text-xs text-black dark:text-white">"Currently coding... "</p>
            <p className="text-xs text-black dark:text-white">She/Her</p>
            <p className="text-xs text-black dark:text-white">San Antonio, TEXAS</p>
            <p className="text-xs text-black dark:text-white">United States</p>
            <p className="text-xs text-black dark:text-white mt-2">Last Login: 2 minutes ago</p>
            <p className="text-xs text-black dark:text-white">Status: Available for New Opportunities</p>
            <div className="mt-2">
              <a href="https://docs.google.com/document/d/1Te9UsvtdF-xzI0v7cLMYAuTnDRmaPyOiDUH30E5XXT8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">View My: Portfolio | Resume</a>
            </div>
          </div>
        </div>
      </div>

      {/* Contacting Jessica */}
      <div className="bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 dark:border-blue-400 p-4">
        <h3 className="font-bold text-black dark:text-white text-sm mb-3">Contacting Jessica</h3>
        <div className="grid grid-cols-2 gap-2">
          <a href="mailto:calderonjessica13@yahoo.com" className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center">
            <span className="mr-1">✉️</span> Send Message
          </a>
          <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center">
            <span className="mr-1">👥</span> Connect
          </a>
          <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center">
            <span className="mr-1">💬</span> Schedule Call
          </a>
          <a href="https://docs.google.com/document/d/1Te9UsvtdF-xzI0v7cLMYAuTnDRmaPyOiDUH30E5XXT8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center">
            <span className="mr-1">📄</span> View Resume
          </a>
          <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center">
            <span className="mr-1">↗️</span> Share Profile
          </a>
          <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center">
            <span className="mr-1">⭐</span> Add to Favorites
          </a>
          <a href="mailto:calderonjessica13@yahoo.com" className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center">
            <span className="mr-1">📧</span> Email Resume
          </a>
          <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center">
            <span className="mr-1">⭐</span> Rate Profile
          </a>
        </div>
      </div>

      {/* Portfolio URL */}
      <div className="bg-white dark:bg-gray-800 border border-black dark:border-gray-600 p-3">
        <p className="text-xs text-black dark:text-white">Portfolio URL:</p>
        <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">http://www.jessicacalderon.dev</a>
      </div>

      {/* Jessica's Technical Skills */}
      <table className="myspace-box">
        <thead>
          <tr>
            <th colSpan={2}>Jessica's Technical Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-black dark:text-gray-300"><b>Programming:</b></td>
            <td className="text-black dark:text-gray-300">PHP, TypeScript, JavaScript, Python, React, Node.js</td>
          </tr>
          <tr>
            <td className="text-black dark:text-gray-300"><b>DevOps:</b></td>
            <td className="text-black dark:text-gray-300">Docker, AWS ECS, CI/CD, STIG compliance, GitLab CI</td>
          </tr>
          <tr>
            <td className="text-black dark:text-gray-300"><b>Databases:</b></td>
            <td className="text-black dark:text-gray-300">PostgreSQL, MySQL, Redis, OpenSearch</td>
          </tr>
          <tr>
            <td className="text-black dark:text-gray-300"><b>Tools:</b></td>
            <td className="text-black dark:text-gray-300">VS Code, GitLab CI, Fluent Bit, Apache Superset</td>
          </tr>
          <tr>
            <td className="text-black dark:text-gray-300"><b>Cloud:</b></td>
            <td className="text-black dark:text-gray-300">AWS, ECS, S3, RDS, CloudWatch</td>
          </tr>
          <tr>
            <td className="text-black dark:text-gray-300"><b>Specialties:</b></td>
            <td className="text-black dark:text-gray-300">Moodle Workplace, Data Integration, Iron Bank Containers</td>
          </tr>
        </tbody>
      </table>

      {/* Jessica's Links */}
      <table className="myspace-box">
        <thead>
          <tr>
            <th colSpan={2}>Jessica's Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>GitHub:</b></td>
            <td><a href="https://github.com/jessica-calderon" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/jessica-calderon</a></td>
          </tr>
          <tr>
            <td><b>LinkedIn:</b></td>
            <td><a href="https://linkedin.com/in/Jessica-Calderon-00" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">linkedin.com/in/Jessica-Calderon-00</a></td>
          </tr>
          <tr>
            <td><b>Portfolio:</b></td>
            <td><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">jessicacalderon.dev</a></td>
          </tr>
          <tr>
            <td><b>Resume:</b></td>
            <td><a href="https://docs.google.com/document/d/1Te9UsvtdF-xzI0v7cLMYAuTnDRmaPyOiDUH30E5XXT8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">View Resume</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sidebar;