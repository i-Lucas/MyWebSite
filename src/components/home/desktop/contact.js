import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import config from '../../resources/config';
import { RenderHome } from '../../resources/render';
import RenderContext from '../../contexts/render';
import Loader from '../../resources/loader';

export default function Contact() {

    const { render, setRender } = React.useContext(RenderContext);
    const [data, setUserForm] = React.useState({ name: '', email: '', contact: '', message: '' });
    const [loading, setLoading] = React.useState(false);

    function handleSubmit(e) {

        setLoading(true);
        e.preventDefault();
        axios.post(`${config.API}/contact`, data).then(res => {
            alert('Thank you for your message!\nI will get back to you as soon as possible.');
            setLoading(false);
        }).catch(err => {
            alert('Something went wrong. Please try again later.');
            setLoading(false);
        })

        return RenderHome({ render, setRender });
    }

    return (
        <ContactContainer>
            <Content>
                <form onSubmit={handleSubmit}>
                    <input type={'text'} placeholder={'Name'} required minLength='5'
                        onChange={e => setUserForm({ ...data, name: e.target.value })} />
                    <input type={'email'} placeholder={'Email'} required
                        onChange={e => setUserForm({ ...data, email: e.target.value })} />
                    <input type={'text'} placeholder={'Contact'}
                        onChange={e => setUserForm({ ...data, contact: e.target.value })} />
                    <textarea placeholder={'Message'} required minLength='10'
                        onChange={e => setUserForm({ ...data, message: e.target.value })} />
                    <button>{loading ? Loader : 'Send'}</button>
                </form>
            </Content>
        </ContactContainer>
    )
}

const ContactContainer = styled.div`

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
    border: 1px solid #000;

    form {

        width: 100%;
        height: 100%;

        display: flex;  
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input {

            width: 80%;
            height: 15%;
            border: none;
            border-bottom: 1px solid black;
            margin-bottom: 10px;

            font-family: 'Poppins';
            font-weight: 700;
            font-size: 20px;
            letter-spacing: -1px;
            color: #42446E;
            padding-top: 30px;
            
            &:focus {
                outline: none;
            }
        }

        textarea {

            min-width: 80%;
            min-height: 20%;
            max-width: 80%;
            max-height: 20%;

            border: none;
            border-bottom: 1px solid black;
            margin-bottom: 10px;

            font-family: 'Poppins';
            font-weight: 700;
            font-size: 20px;
            letter-spacing: -1px;
            color: #42446E;

            &:focus {
                outline: none;
            }
        }

        button {

            width: 30%;
            height: 10%;

            border: none;
            border-radius: 5px;
            background-color: #42446E;

            font-family: 'Poppins';
            font-weight: 700;
            font-size: 20px;
            line-height: 70px;
            letter-spacing: -1px;
            color: #fff;
            
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-top: 2%;          

            &:hover {

                transform: scale(1.1);
                animation: shake .2s;
                animation-iteration-count: 4;
            }

            @keyframes shake {
                0% {margin-left: 0;}
                25% {margin-left: 7px;}
                50% {margin-left: 0;}
                75% {margin-left: -7px;}
                100% {margin-left: 0;}
            }
        }
    }
`;