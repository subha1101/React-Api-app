import React, { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import Search from './Search';
import Pagination from './Pagination';
function FetchData({ itemsPerPage, setItemsPerPage }) {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [currentPage, setCurrentPage] = useState(1); 

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        setRecords(res.data);
        setFilteredRecords(res.data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchVal(value);

    if (value.trim() === '') {
      setFilteredRecords(records);
    } else {
      const filtered = records.filter((record) =>
        record.name.toLowerCase().includes(value.toLowerCase()) ||
        record.email.toLowerCase().includes(value.toLowerCase()) ||
        record.body.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredRecords(filtered);
    }
    setCurrentPage(1); 
  };
  const indexOfLastRecord = currentPage * itemsPerPage; 
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage; 
  const displayedRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord); 

  const totalRecords = filteredRecords.length; 

  return (
    <div className="table-responsive-sm">
      <div className="mb-3 d-flex justify-content-between align-content-center">
=======

function FetchData({ itemsPerPage, setItemsPerPage }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => setRecords(res.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // Slice the records based on the itemsPerPage state
  const displayedRecords = records.slice(0, itemsPerPage);

  return (
    <div className="table-responsive-sm">
      <div className="mb-3 d-flex justify-content-between">
>>>>>>> 2b05f18eaa6f7657362f0625f5e1cd8415e5622e
        <div>
          <label htmlFor="itemsPerPage">Show items:</label>
          <select
            id="itemsPerPage"
            className="form-control w-auto d-inline"
            style={{ display: 'inline-block' }}
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
<<<<<<< HEAD
        <Search searchVal={searchVal} handleSearch={handleSearch} />
=======
>>>>>>> 2b05f18eaa6f7657362f0625f5e1cd8415e5622e
      </div>
      
      <table className="table table-hover table-borderless table-primary table-bordered">
        <thead>
          <tr>
            <th className="text-nowrap">Post ID</th>
            <th className="text-nowrap">User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          {displayedRecords.map((record) => (
            <tr key={record.id}>
=======
          {displayedRecords.map((record, index) => (
            <tr key={index}>
>>>>>>> 2b05f18eaa6f7657362f0625f5e1cd8415e5622e
              <td>{record.postId}</td>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
<<<<<<< HEAD

      <Pagination 
        postsPerPage={itemsPerPage}
        totalPosts={totalRecords}
        handlePagination={setCurrentPage}
        currentPage={currentPage}
      />
=======
>>>>>>> 2b05f18eaa6f7657362f0625f5e1cd8415e5622e
    </div>
  );
}

export default FetchData;
<<<<<<< HEAD


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function FetchData({ itemsPerPage, setItemsPerPage }) {
//   const [records, setRecords] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/comments')
//       .then(res => setRecords(res.data))
//       .catch(error => console.error("Error fetching data:", error));
//   }, []);

//   // Slice the records based on the itemsPerPage state
//   const displayedRecords = records.slice(0, itemsPerPage);

//   return (
//     <div className="table-responsive-sm">
//       <div className="mb-3 d-flex justify-content-between">
//         <div>
//           <label htmlFor="itemsPerPage">Show items:</label>
//           <select
//             id="itemsPerPage"
//             className="form-control w-auto d-inline"
//             style={{ display: 'inline-block' }}
//             value={itemsPerPage}
//             onChange={(e) => setItemsPerPage(Number(e.target.value))}
//           >
//             <option value="5">5</option>
//             <option value="10">10</option>
//             <option value="15">15</option>
//             <option value="20">20</option>
//           </select>
//         </div>
//       </div>
      
//       <table className="table table-hover table-borderless table-primary table-bordered">
//         <thead>
//           <tr>
//             <th className="text-nowrap">Post ID</th>
//             <th className="text-nowrap">User ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Content</th>
//           </tr>
//         </thead>
//         <tbody>
//           {displayedRecords.map((record, index) => (
//             <tr key={index}>
//               <td>{record.postId}</td>
//               <td>{record.id}</td>
//               <td>{record.name}</td>
//               <td>{record.email}</td>
//               <td>{record.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default FetchData;
=======
>>>>>>> 2b05f18eaa6f7657362f0625f5e1cd8415e5622e
