import React from 'react';

import styled from 'styled-components';
import Logo from '../logo/logo';
import Goto from '../resources/goto';
import ScrollTo from '../resources/scroll';

import RenderContext from '../contexts/render';

import { RenderAbout, RenderContact, RenderHome } from '../resources/render';

export default function DesktopHeader() {

    const { render, setRender } = React.useContext(RenderContext);

    return (
        <HeaderDesktop id='home'>
            <HeaderContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <ButtonsContainer>
                    <button onClick={() => RenderHome({ render, setRender })}>Home</button>
                    <button onClick={() => RenderAbout({ render, setRender })}>About</button>
                    <button onClick={() => ScrollTo('tech')}>Tech Stack</button>
                    <button onClick={() => ScrollTo('projects')}>Projects</button>
                    <button onClick={() => RenderContact({ render, setRender })}>Contact</button>
                </ButtonsContainer>
                <IconsContainer>
                    <ion-icon onClick={() => Goto('https://www.linkedin.com/in/hilucas/')} name="logo-linkedin"></ion-icon>
                    <ion-icon onClick={() => Goto('mailto:novo.contato.lucas@gmail.com')} name="logo-google"></ion-icon>
                    <ion-icon onClick={() => Goto('https://github.com/i-Lucas')} name="logo-github"></ion-icon>
                </IconsContainer>
            </HeaderContainer>
        </HeaderDesktop>
    )
}

const HeaderDesktop = styled.div`

    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
`;

const HeaderContainer = styled.div`

    width: 80%;
    height: 100%;
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