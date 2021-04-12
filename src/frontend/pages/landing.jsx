import React from 'react';

import HeaderLanding from '../components/headerLanding.jsx';
import TableLanding from '../components/tableLanding.jsx';
import LandingDetails from '../components/landingDetails.jsx';

function landing() {
    return (
        <div>
            <HeaderLanding></HeaderLanding>
            <TableLanding></TableLanding>
            <LandingDetails></LandingDetails>
            
        </div>
    )
}

export default landing
