import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/aqua/data'); // Assuming your backend API endpoint is '/api/aqua/data'
        setData(response.data);
        setLoading(false);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <h2>Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          <p>Temperature: {data.Temperature}</p>
          <p>PH: {data.PH}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
  </div>
  )
}

export default Home