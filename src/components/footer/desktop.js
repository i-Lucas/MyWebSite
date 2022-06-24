import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Logo from '../logo/logo';
import Goto from '../resources/goto';
import ScrollTo from '../resources/scroll';
import config from '../resources/config';
import RenderContext from '../contexts/render';

import { RenderAbout, RenderContact, RenderHome } from '../resources/render';

export default function DesktopFooter() {

    const { render, setRender } = React.useContext(RenderContext);
    const [visits, setVisits] = React.useState(0);

    React.useEffect(() => {

        axios.get(`${config.API_LOCAL}/visits`).then(res => {
            setVisits(res.data.visits);
        });

    }, [visits]);

    return (
        <FooterContainer>
            <TopContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <InfoContainer>
                    <Info><h1>novo.contato.lucas@gmail.com</h1></Info>
                </InfoContainer>
                <IconsContainer>
                    <ion-icon onClick={() => Goto('https://www.linkedin.com/in/hilucas/')} name="logo-linkedin"></ion-icon>
                    <ion-icon onClick={() => Goto('mailto:novo.contato.lucas@gmail.com')} name="logo-google"></ion-icon>
                    <ion-icon onClick={() => Goto('https://github.com/i-Lucas')} name="logo-github"></ion-icon>
                </IconsContainer>
            </TopContainer>
            <Bottom>
                <Rights>
                    <p>&copy; 2022 Lucas Oliveira</p>
                    <p>Designed by <a href="https://www.linkedin.com/in/hilucas/">Lucas Oliveira</a></p>
                    <h3>number of visits: {visits}</h3>
                </Rights>
                <ButtonsContainer>
                    <button onClick={() => RenderHome({ render, setRender })}>Home</button>
                    <button onClick={() => RenderAbout({ render, setRender })}>About</button>
                    <button onClick={() => ScrollTo('tech')}>Tech Stack</button>
                    <button onClick={() => ScrollTo('projects')}>Projects</button>
                    <button onClick={() => RenderContact({ render, setRender })}>Contact</button>
                </ButtonsContainer>
            </Bottom>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`

    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`;

const TopContainer = styled.div`

    width: 80%;
    height: 50%;
    display: flex;
`;

const LogoContainer = styled.div`

    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const InfoContainer = styled.div`

    width: 80%;
    height: 100%;
    display: flex;
`;

const Info = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    h1 {

        margin-right: 10%;
        font-family: 'DM Sans';
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        color: #42446E;
    }
`;

const IconsContainer = styled.div`

    width: 20%;
    height: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    ion-icon {
        font-size: 25px;
        color: #666666;
        cursor: pointer;
        &:hover {
            transform: scale(1.05);
            color: #42446E;
         }
    }
    
`;

const Bottom = styled.div`

    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid rgba(102, 102, 102, 0.2);
`;

const Rights = styled.div`

    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
        font-family: 'DM Sans';
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;

        a {
            text-decoration: none;
        }
    }

    h3 {
        font-family: 'DM Sans';
        font-weight: bold;
        font-size: 10px;
        line-height: 20px;
        color: #666666;
    }
`;

const ButtonsContainer = styled.div`

    width: 60%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    button {

        border: none;
        background-color: transparent;
        cursor: pointer;

        font-family: 'DM Sans';
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #666666;

        &:hover {
            transform: scale(1.05);
            color: #42446E;
         }
    }
`;