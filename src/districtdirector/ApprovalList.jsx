import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dd.css';

const ApprovalList = (props) => {
  const [search, setSearch] = useState('');
  const [district, setDistrict] = useState([]);
  const userDistrict=props.data;
  // Define the fetchData function
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/approvallist',{params:{userDistrict}});
      setDistrict(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='approve-li'>
      <center>
        <h1>Approval List</h1>
        <h4>Enter the city</h4>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /><br />

<div className="admin-app-ta">
        <table border="1">
          <thead>
            <tr>
              <th>Index</th>
              <th>Station Name</th>
              <th>Delta Value</th>
              <th>Updated By</th>
              <th>Date & Time</th>
              
            </tr>
          </thead>
          <tbody>
            {district
              .filter((city) => city.name.includes(search))
              .map((city, index) => {
                const isRed = city.finalvalue === null && city.value !== null;
                // Split the update information
                const updateInfo = city.updatetime.split("At ");
                const updatedBy = updateInfo[0].trim();
                const dateTime = updateInfo[1].trim();

                return (
                  <tr key={city._id} style={{ color: isRed ? "red" : "green" , opacity: 0.6}}>
                    <td>{index + 1}</td>
                    <td>{city.name}</td>
                    <td>{city.value}</td>
                    <td>{`${updatedBy}`}</td>
                    <td>{dateTime}</td>
                    
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      </center>
    </div>
  );
};

export default ApprovalList;
