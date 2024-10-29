import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import FetchData from './FetchData';

function App() {
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div className="container mt-2">
      <h1>Table </h1>
      <FetchData itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }
