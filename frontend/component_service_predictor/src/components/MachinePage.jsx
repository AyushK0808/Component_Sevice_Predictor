import React, { useState, useRef } from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import ReadData from './ReadData';
import ReactToPrint from 'react-to-print';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import axios from 'axios';

// Sample data
const data = ReadData;

// Function to generate random integer between min and max (inclusive)
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function MachinePage({ machine, onBack }) {
  const [selectedComponent, setSelectedComponent] = useState('');
  const [ageOfMachine, setAgeOfMachine] = useState(getRandomInt(600, 1000));
  const [nextServiceIn, setNextServiceIn] = useState(getRandomInt(10, 30));
  const [lastService, setLastService] = useState(getRandomInt(100, 200));
  const [alerts, setAlerts] = useState(getRandomInt(10, 30));

  // Extract unique components for the given machine
  const getUniqueComponents = () => {
    if (!data[machine]) return [];
    return Object.keys(data[machine]);
  };

  // Filter data based on selected component
  const filterData = () => {
    if (!selectedComponent) return [];

    const machineData = data[machine];
    if (!machineData || !machineData[selectedComponent]) return [];

    const filteredData = machineData[selectedComponent].map(item => ({
      Time: new Date(item.Time).toLocaleDateString(), // Format time for better readability
      ...item
    }));

    return filteredData;
  };

  const chartData = filterData();

  // Collect all unique parameters from the data
  const getAllParameters = () => {
    const parameters = new Set();
    chartData.forEach(item => {
      Object.keys(item).forEach(key => {
        if (key !== 'Time') parameters.add(key);
      });
    });
    return Array.from(parameters);
  };

  const allParameters = getAllParameters();

  // Define colors for the parameters
  const colors = [
    "#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#413ea0",
    "#ff00ff", "#00ff00", "#00ffff", "#ff0000", "#800080"
  ];

  // Map each parameter to a color
  const parameterColors = allParameters.reduce((acc, param, index) => {
    acc[param] = colors[index % colors.length];
    return acc;
  }, {});

  // Ref for print content
  const printRef = useRef();

  // Function to handle redirection
  const handleRedirect = () => {
    window.location.href = 'http://localhost:3000/';
  };

  // Function to handle PDF download
  const handleDownloadPDF = async () => {
    const token = localStorage.getItem('token'); // Get JWT token from local storage
    if (!token) {
      alert('No JWT token found');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/pdf/generate', {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure 'Bearer' prefix is used for JWT
        },
        responseType: 'blob' // Ensure response is treated as binary data
      });

      // Create a URL for the PDF blob and open it in a new tab
      const url = URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      window.open(url);

    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3 className='text-5xl font-extrabold dark:text-white'>{machine}</h3>
      </div>

      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>AGE OF MACHINE</h3>
            <BsFillArchiveFill className='card_icon'/>
          </div>
          <h1>{ageOfMachine} days</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>NEXT SERVICE IN</h3>
            <BsFillGrid3X3GapFill className='card_icon'/>
          </div>
          <h1>{nextServiceIn} days</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>LAST SERVICE</h3>
            <BsPeopleFill className='card_icon'/>
          </div>
          <h1>{lastService} days</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon'/>
          </div>
          <h1>{alerts} </h1>
        </div>
      </div>

      <div className='flex-row'>
        <div className="relative inline-block text-left">
          <div className="flex justify-between items-center p-2 bg-gray-800 text-white rounded shadow">
            <div className="relative">
              <select
                value={selectedComponent}
                onChange={(e) => setSelectedComponent(e.target.value)}
                className="block w-full px-3 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a Component</option>
                {getUniqueComponents().map(component => (
                  <option key={component} value={component}>
                    {component}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className='chart-container'>
          <div className='chart'>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {allParameters.map(param => (
                    <Line
                      key={param}
                      type="monotone"
                      dataKey={param}
                      stroke={parameterColors[param]}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p>No data available for the selected component.</p>
            )}
          </div>

          <div className='controls'>
            <ReactToPrint
              trigger={() => <button className='pdf-button'>Download Graph</button>}
              content={() => printRef.current}
            />
            <button className='redirect-button' onClick={handleRedirect}>Talk with ChatBot</button>
            <button className='download-button' onClick={handleDownloadPDF}>Analytics</button>
            <button className='back-button' onClick={onBack}>Back to Machines</button>
          </div>
        </div>

        {/* Content to print */}
        <div style={{ display: 'none' }}>
          <div ref={printRef}>
            <h1>{machine} Report</h1>
            <div className='charts'>
              {chartData.length > 0 ? (
                <LineChart
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  width={800}
                  height={400}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {allParameters.map(param => (
                    <Line
                      key={param}
                      type="linear"
                      dataKey={param}
                      stroke={parameterColors[param]}
                    />
                  ))}
                </LineChart>
              ) : (
                <p>No data available for the selected component.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MachinePage;