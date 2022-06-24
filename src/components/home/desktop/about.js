import React from 'react';
import styled from 'styled-components';
import content from '../../resources/abouteme.js';

export default function About() {
    return (
        <AboutContainer>
            <Content>
                <Header>
                    <h1>About Me</h1>
                </Header>
                <Body>
                    {content}
                </Body>
            </Content>
        </AboutContainer>
    )
}

const AboutContainer = styled.div`

    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

const Content = styled.div`

    width: 90%;
    height: 110%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border: 1px solid #000;

    overflow: auto;
`;

const Header = styled.div`

    width: 80%;
    height: 15%;
    margin-top: 5%;

    h1 {

        font-family: 'Poppins';
        font-weight: 700;
        font-size: 42px;
        line-height: 52px;
        color: #42446E;
    }
`;

const Body = styled.div`

    width: 80%;
    height: 15%;
    margin-top: 2%;

    p {

        font-family: 'Poppins';
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #666666;
    }
`;