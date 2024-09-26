'use client';

import React, { useState, useEffect } from 'react';

const PlayerCard = ({ searchQuery }) => {
  const [data, setData] = useState(null);  // Initial state is null
  const [error, setError] = useState(null);  // To handle errors

  useEffect(() => {
    const getTeams = async () => {
      console.log('Fetching teams...');
      try {
        const res = await fetch('/api/teams');  // Ensure correct API endpoint
        console.log('Fetch completed'); // Log after fetch

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log('Data:', data); // Log the data
        setData(data);  // Update state with fetched data

      } catch (error) {
        console.error('Error fetching teams:', error.message || error);
        setError(error.message);  // Set error state
      }
    };

    getTeams();
  }, []); // Empty dependency array ensures it only runs once when the component mounts

  // Filter data based on searchQuery
  const filteredData = data?.body?.filter(team => 
    team.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.teamCity.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {error && <p>Error: {error}</p>} {/* Display error message if there's an error */}

      {!data ? (
        <p>Loading...</p>  // Show loading state while data is null
      ) : (
        filteredData.map((team, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-xl flex flex-col">
            <figure>
              <img
                src={team.nflComLogo1}
                alt={team.teamName}
              />
            </figure>
            <div className="card-body mt-auto">
              <h2 className="card-title">{team.teamCity + " " + team.teamName}</h2>
              <h2 className="card-title">
                <div className="badge badge-success">
                  {team.wins + "-" + team.loss}
                </div>
              </h2>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{team.division}</div>
                <div className="badge badge-outline">{team.conference}</div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PlayerCard;
