import React, { useState } from 'react';
import MachinePage from './MachinePage';
import Header from './Header';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import ReadData from './ReadData';

// Sample data
const data = ReadData;

// Define the specific machines
const specificMachines = [
  'Asphalt_Paver_1',
  'Excavator_1',
  'Backhoe_Loader_1',
  'Dozer_1',
  'Articulated_Truck_1'
];

function Home() {
  const [selectedMachine, setSelectedMachine] = useState('');
  const [viewMachinePage, setViewMachinePage] = useState(false);

  const handleSearch = (query) => {
    const machine = query.trim();
    if (specificMachines.includes(machine)) {
      setSelectedMachine(machine);
      setViewMachinePage(true);
    } else {
      alert('Machine not found');
    }
  };

  const handleMachineSelect = (e) => {
    const machine = e.target.value;
    if (specificMachines.includes(machine)) {
      setSelectedMachine(machine);
      setViewMachinePage(true);
    } else {
      alert('Machine not found');
    }
  };

  return (
    <main className='p-5'>
      <Header OpenSidebar={() => { /* handle sidebar open */ }} onSearch={handleSearch} />

      {viewMachinePage ? (
        <MachinePage
          machine={selectedMachine}
          onBack={() => {
            setViewMachinePage(false); // Set to false to return to the dashboard
            setSelectedMachine('');
          }}
        />
      ) : (
        <>
          <div className='relative inline-block text-left'>
            <label htmlFor="machine-select" className="block text-sm font-medium text-gray-700">
              Quick Search:
            </label>
            <select
              id="machine-select"
              value={selectedMachine}
              onChange={handleMachineSelect}
              className="block w-full mt-1 border border-gray-300 rounded-md bg-white py-2 px-3 text-sm text-gray-700 shadow-sm ring-1 ring-gray-300 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select a Machine</option>
              {specificMachines.map(machine => (
                <option key={machine} value={machine}>
                  {machine}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </main>
  );
}

export default Home;
