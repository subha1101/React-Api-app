import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
          {displayedRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.postId}</td>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchData;
