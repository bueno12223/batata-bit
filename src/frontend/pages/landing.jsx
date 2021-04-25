import React from 'react';

import Header from '../components/landing/headerLanding.jsx';
import HeroLanding from '../components/landing/heroLanding.jsx';
import TableLanding from '../components/landing/tableLanding.jsx';
import LandingDetails from '../components/landing/landingDetails.jsx';
import PlansLanding from '../components/landing/plansLanding.jsx';
import Footer from '../components/landing/footer.jsx';

function landing() {
    return (
        <div>
            <Header></Header>
            <HeroLanding></HeroLanding>
            <TableLanding></TableLanding>
            <LandingDetails></LandingDetails>
            <PlansLanding></PlansLanding>
            <Footer></Footer>
        </div>
    )
}

export default landing
