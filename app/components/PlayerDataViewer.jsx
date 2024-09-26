'use client';

import React, { useState } from 'react';
import NavBar from './NavBar';
import PlayerDataTable from './PlayerDataTable';

const PlayerDataViewer = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  return (
    <>
      {/* Pass searchQuery and setSearchQuery to Nav */}
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Pass searchQuery to PlayerCard to filter data */}
      <PlayerDataTable searchQuery={searchQuery} />
    </>
  );
}

export default PlayerDataViewer
