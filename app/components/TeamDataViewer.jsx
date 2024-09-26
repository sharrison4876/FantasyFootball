'use client';

import React, { useState } from 'react';
import NavBar from './NavBar';
import TeamCard from './TeamCard'

const TeamDataViewer = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  return (
    <>
      {/* Pass searchQuery and setSearchQuery to Nav */}
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Pass searchQuery to PlayerCard to filter data */}
      <TeamCard searchQuery={searchQuery} />
    </>
  );
}

export default TeamDataViewer;
