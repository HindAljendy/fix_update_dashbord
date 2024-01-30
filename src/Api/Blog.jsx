import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://test.black-analysis-solutions.com/api/rooms');
        setPersons(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Pass an empty dependency array to run effect only once

  return (
  <></>
  );
}

export default MyComponent;