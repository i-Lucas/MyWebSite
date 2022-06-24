import React from 'react';
import styled from 'styled-components';

import MobileHeader from '../header/mobile';
import construction from '../../assets/img/construction.png';

export default function MobileComponent() {

    return (
        <HomeContainer>
            {/* <MobileHeader />*/}
            <MobileBody img={construction}>
                <h1>Sorry !</h1>
                <h2>The mobile version of this page will be available soon</h2>
                <h2>You can visit this page on your computer</h2>
            </MobileBody>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`

    width: 100%;
    height: 100vh;
`;

const MobileBody = styled.div`

    width: 100%;
    height: 92%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    background-image: url(${props => props.img});
    background-size: auto 50%;
    background-repeat: no-repeat;
    background-position: center;

    h1 {
        font-size: 50px;
    }

    h2 {
        font-size: 15px;
    }

    h1, h2 {

        font-family: 'Poppins';
        font-weight: 700;
        line-height: 70px;
        letter-spacing: -1px;
        color: #42446E;
    }

`;