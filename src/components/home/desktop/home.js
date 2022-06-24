import React from 'react';

import styled from 'styled-components';
import dev from '../../../assets/img/dev.png'
import Contact from './contact';
import About from './about';
import hand from '../../../assets/img/hi.gif'

import RenderContext from '../../contexts/render';

export default function DesktopBody() {

    const { render } = React.useContext(RenderContext);

    const hello = <h1>Hi <img src={hand} width='80px' /><br />I'm Lucas <br />I build things for web</h1>;

    const Home = <HomeContainer><Hello>{hello}</Hello><Img><img src={dev}></img></Img></HomeContainer>;

    return <BodyDesktop>{render.showContact ? <Contact /> : render.showAbout ? <About /> : Home}</BodyDesktop>
}

const BodyDesktop = styled.div`

    width: 100%;
    height: 90%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const HomeContainer = styled.div`

    width: 80%;
    height: 80%;
    display: flex;
`;

const Hello = styled.div`

    width: 65%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 58px;
        line-height: 100px;
        letter-spacing: -1px;
        color: #42446E;
    }   
`;

const Img = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    img {

        width: 80%;
        border-radius: 50%;
        border: 5px solid #42446E;
        filter: grayscale(70%);

        &:hover {
            transform: scale(1.02);
            animation: spin  1s;
            cursor: pointer;
        }

        @keyframes spin {
            0% {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
        }
    }

`;