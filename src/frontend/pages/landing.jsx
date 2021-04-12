import React from 'react';

import HeaderLanding from '../components/landing/headerLanding.jsx';
import TableLanding from '../components/landing/tableLanding.jsx';
import LandingDetails from '../components/landing/landingDetails.jsx';
import PlansLanding from '../components/landing/plansLanding.jsx';
import Footer from '../components/landing/footer.jsx';

function landing() {
    return (
        <div>
            <HeaderLanding></HeaderLanding>
            <TableLanding></TableLanding>
            <LandingDetails></LandingDetails>
            <PlansLanding></PlansLanding>
            <Footer></Footer>
        </div>
    )
}

export default landing
