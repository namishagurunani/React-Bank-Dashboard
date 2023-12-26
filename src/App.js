import React, { useState } from 'react';
import './App.css';
import FinancialData from './Components/FinancialData';
import Data from './Components/Data';

function App() {
  const [financialData, setFinancialData] = useState({
    homevalue:5000,
    loanAmount: 10000,
    loanTerm: 10,
    interestRate: 5,
  });

  return (
    <div id="main">
      <h1>Bank of React</h1>
    <div className="App">
      <FinancialData data={financialData} onDataUpdate={setFinancialData} />
      <Data data={financialData} />
    </div>
    </div>
  );
}

export default App;