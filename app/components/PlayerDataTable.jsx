

import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';

const PlayerDataTable = ({ searchQuery }) => {

    const [data, setData] = useState(null);  // Initial state is null
    const [error, setError] = useState(null);  // To handle errors
    const [selectedPlayer, setSelectedPlayer] = useState(null);  // State for selected resource
    const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (player) => {
    setSelectedPlayer(player);  // Set the selected resource data
    setIsModalVisible(true);  // Show the modal
  };

  const closeModal = () => {
    setIsModalVisible(false);  // Hide the modal
    setSelectedPlayer(null);  // Clear the selected resource data
  };

    useEffect(() => {
        const getPlayers = async () => {
          console.log('Fetching players...');
          try {
            const res = await fetch('/api/players');  // Ensure correct API endpoint
            console.log('Fetch completed'); // Log after fetch
    
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
    
            const data = await res.json();
            console.log('Data:', data); // Log the data
            setData(data);  // Update state with fetched data
    
          } catch (error) {
            console.error('Error fetching players:', error.message || error);
            setError(error.message);  // Set error state
          }
        };
    
        getPlayers();
      }, []); // Empty dependency array ensures it only runs once when the component mounts

      const filteredData = data?.body?.filter(player => 
        player.espnName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.pos.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
  return (
    <>
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Number</th>
                <th>Position</th>
                <th>Team</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
      {error && <p>Error: {error}</p>} {/* Display error message if there's an error */}

      {!data ? (
        <p>Loading...</p>  // Show loading state while data is null
      ) : (
        filteredData.map((player, index) => (
            <tr>
                <th>{index+1}</th>
                <td><div className='avatar'><div className="w-24 rounded-full"><img src={player.espnHeadshot} /></div></div></td>
                <td>{player.espnName}</td>
                <td>{player.jerseyNum}</td>
                <td>{player.pos}</td>
                <td>{player.team}</td>
                <td>
                <button onClick={() => openModal(player)} className="btn">
                          More Details
                        </button>
                </td>
            </tr>
        ))
      )}
      </tbody>
        </table>
    </div>
    {/* The Modal component */}
    {selectedPlayer && (
        <Modal isVisible={isModalVisible} onClose={closeModal}>
          {/* Pass the selected resource data to the modal */}
          <h2 class='modal-header'>Player Details</h2>
          <hr />
          <br />
          <div className='avatar'><div className="w-24 rounded-full"><img src={selectedPlayer.espnHeadshot} /></div></div>
          <h3>{ "#" + selectedPlayer.jerseyNum + " " + selectedPlayer.espnName }</h3>
          <ul>
            <li>Age: {selectedPlayer.age} </li>
            <li>Weight: {selectedPlayer.weight} </li>
          </ul>
          <p>Stats</p>
          <ul>
          </ul>
        </Modal>
      )}
    </>
  )
}

export default PlayerDataTable