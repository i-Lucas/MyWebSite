import React from 'react';
import styled from 'styled-components';

import Header from '../header/desktop';
import Home from './desktop/home';
import TechStack from './desktop/stack';
import Projects from './desktop/projects';
import Footer from '../footer/desktop';

export default function DesktopComponent() {

    return (
        <HomeContainer>
            <Header />
            <Home />
            <TechStack />
            <Projects />
            <Footer />
        </HomeContainer>
    )
}

const HomeContainer = styled.div`

    width: 100%;
    height: 100vh;
`;