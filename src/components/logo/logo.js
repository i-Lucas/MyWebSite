import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/img/logo.png';

export default function Logo() {

    const text = '{ i-Lucas }';
    return (
        <LogoContainer>
            <img src={logo} width='20px' />
            <h4>{text}</h4>
            <h5>software engineer</h5>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        color: #42446E;
        font-weight: bold;
    }

    h4 { 
        font-size: 10px;
        font-weight: bold;
        font-family: 'DM Sans';
        color: #666666;
    }

    h5 {
        font-size: 10px;
        font-family: 'DM Sans';
    }
    
    img {
        margin-bottom: 3px;
        &:hover {
            animation: spin 1s linear infinite;
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); 
            }
        }
    }
`;