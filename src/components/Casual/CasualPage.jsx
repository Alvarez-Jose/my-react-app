// CasualPage.js
import React from 'react';
import NavbarCasual from '../NavBar/NavbarCasual';
import ToggleButton from '../Common/ToggleButton';

const CasualPage = () => {
  return (
    <div>
      <h1>Test</h1>
      <ToggleButton to="/professional" label="Switch to Professional" />
    </div>
  );
};

export default CasualPage;
