import React from 'react';

const PlayerModal = ({ player, isVisible, onClose }) => {
  if (!isVisible || !player) {
    return null;
  }

  const { espnName, espnHeadshot, jerseyNum, pos, age, weight, stats } = player;

  // Helper function to render stats dynamically
  const renderStats = () => {
    if (pos === 'DE' || pos === 'DL' || pos === 'LB') {
      // Display defense stats for defensive positions like DE, DL, LB
      return (
        <>
          <h3>Defense Stats</h3>
          <ul>
            <li>Total Tackles: {stats?.Defense?.totalTackles}</li>
            <li>Solo Tackles: {stats?.Defense?.soloTackles}</li>
            <li>Fumbles: {stats?.Defense?.fumbles}</li>
            <li>Fumbles Recovered: {stats?.Defense?.fumblesRecovered}</li>
            <li>Sacks: {stats?.Defense?.sacks}</li>
            <li>Interceptions: {stats?.Defense?.defensiveInterceptions}</li>
            <li>Pass Deflections: {stats?.Defense?.passDeflections}</li>
            <li>QB Hits: {stats?.Defense?.qbHits}</li>
            <li>Tackles for Loss: {stats?.Defense?.tfl}</li>
            <li>Defensive Touchdowns: {stats?.Defense?.defTD}</li>
          </ul>
        </>
      );
    } else {
      // Display offense stats (assuming you have offensive stats in your dataset)
      return (
        <>
          <h3>Offense Stats</h3>
          <ul>
            {/* Example offensive stats */}
            <li>Games Played: {stats?.gamesPlayed}</li>
            {/* Add more offensive stats here if available */}
          </ul>
        </>
      );
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{espnName}</h2>
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
        <div className="modal-body">
          <div className="avatar">
            <img src={espnHeadshot} alt={espnName} className="w-24 rounded-full" />
          </div>
          <h3>{`#${jerseyNum} ${espnName}`}</h3>
          <ul>
            <li>Position: {pos}</li>
            <li>Age: {age}</li>
            <li>Weight: {weight}</li>
          </ul>
          <hr />
          {/* Dynamically render stats based on the player's position */}
          {renderStats()}
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
