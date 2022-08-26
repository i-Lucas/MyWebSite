import React from 'react';
import axios from 'axios';
import config from '../resources/config.json'
import styled from 'styled-components';

import logo from '../../assets/img/logo.png';

export default function Logo({ this_ }) {

    function secret() {

        if (!this_) return;
        let input = prompt(`that's not a bug`);

        if (!input || input.length !== 4) return;
        input = input.replace(/[^0-9]/g, '');

        axios.get(`${config.API}/posts/${input}`)
            .then(res => console.log(res.data))
            .catch(err => {
                if (err.response.data === "Empty") return alert('nothing here');
                return alert('nothing interesting happens');
            });
    };

    return (
        <LogoContainer>
            <img src={logo} width='20px' onClick={() => secret()} />
            <h4>{`{ i-Lucas }`}</h4>
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