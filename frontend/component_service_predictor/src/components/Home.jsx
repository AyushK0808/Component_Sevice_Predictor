import React, { useState } from 'react';
import MachinePage from './MachinePage';
import Header from './Header';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import ReadData from './ReadData';

// Sample data
const data = ReadData;

function Home() {
  const [selectedMachine, setSelectedMachine] = useState('');
  const [viewMachinePage, setViewMachinePage] = useState(false);

  const handleSearch = (query) => {
    const machine = query.trim();
    if (data[machine]) {
      setSelectedMachine(machine);
      setViewMachinePage(true);
    } else {
      alert('Machine not found');
    }
  };

  const handleMachineSelect = (machine) => {
    if (data[machine]) {
      setSelectedMachine(machine);
      setViewMachinePage(true);
    } else {
      alert('Machine not found');
    }
  };

  return (
    <main className='main-container'>
      <Header OpenSidebar={() => { /* handle sidebar open */ }} onSearch={handleSearch} />

      {viewMachinePage ? (
        <MachinePage
          machine={selectedMachine}
          onBack={() => {
            setViewMachinePage(false);
            setSelectedMachine('');
          }}
        />
      ) : (
        <>
          <div className='main-title'>
            <h3>DASHBOARD</h3>
          </div>

          <div className='main-cards'>
            <div className='card'>
              <div className='card-inner'>
                <h3>PRODUCTS</h3>
                <BsFillArchiveFill className='card_icon'/>
              </div>
              <h1>300</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>CATEGORIES</h3>
                <BsFillGrid3X3GapFill className='card_icon'/>
              </div>
              <h1>12</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className='card_icon'/>
              </div>
              <h1>33</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>ALERTS</h3>
                <BsFillBellFill className='card_icon'/>
              </div>
              <h1>42</h1>
            </div>
          </div>

          <div className='input-container text-black'>
            <label>
              Machine:
              <select
                value={selectedMachine}
                onChange={(e) => handleMachineSelect(e.target.value)}
              >
                <option value="">Select a Machine</option>
                {Object.keys(data).map(machine => (
                  <option key={machine} value={machine}>
                    {machine}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </>
      )}
    </main>
  );
}

export default Home;
