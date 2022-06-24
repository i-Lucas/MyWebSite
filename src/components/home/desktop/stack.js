import React from 'react';
import styled from 'styled-components';

import ajax from '../../../assets/img/ajax.svg';
import aws from '../../../assets/img/aws.svg';
import babel from '../../../assets/img/babel.svg';
import css from '../../../assets/img/css.svg';
import docker from '../../../assets/img/docker.svg';
import express from '../../../assets/img/express.svg';
import git from '../../../assets/img/git.svg';
import heroku from '../../../assets/img/heroku.svg';
import html from '../../../assets/img/html.svg';
import js from '../../../assets/img/js.svg';
import linux from '../../../assets/img/linux.svg';
import mongo from '../../../assets/img/mongo.svg';
import node from '../../../assets/img/node.svg';
import posgrees from '../../../assets/img/postgres.svg';
import react from '../../../assets/img/react.svg';
import redis from '../../../assets/img/redis.svg';
import rest from '../../../assets/img/rest.png';
import ts from '../../../assets/img/ts.svg';
import vercel from '../../../assets/img/vercel.svg';
import webpack from '../../../assets/img/webpack.svg';


export default function TechStack() {

    const ImgAndLink = [
        { img: ajax, link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX' },
        { img: aws, link: 'https://aws.amazon.com/' },
        { img: babel, link: 'https://babeljs.io/' },
        { img: css, link: 'https://www.w3schools.com/css/' },
        { img: docker, link: 'https://www.docker.com/' },
        { img: express, link: 'https://expressjs.com/' },
        { img: git, link: 'https://git-scm.com/' },
        { img: heroku, link: 'https://www.heroku.com/' },
        { img: html, link: 'https://www.w3schools.com/html/' },
        { img: js, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { img: linux, link: 'https://www.linux.org/' },
        { img: mongo, link: 'https://www.mongodb.com/' },
        { img: node, link: 'https://nodejs.org/en/' },
        { img: posgrees, link: 'https://www.postgresql.org/' },
        { img: react, link: 'https://reactjs.org/' },
        { img: redis, link: 'https://redis.io/' },
        { img: rest, link: 'https://restfulapi.net/' },
        { img: ts, link: 'https://www.typescriptlang.org/' },
        { img: vercel, link: 'https://vercel.com/' },
        { img: webpack, link: 'https://webpack.js.org/' }
    ];

    const Render = () =>
        ImgAndLink.sort(() => Math.random() - 0.5).map((elm, i) =>
            <img key={i} width='100px' src={elm.img} onClick={() => window.open(elm.link, '_blank')} />)

    return (
        <TechCointainer id="tech">
            <HeaderContainer>
                <h1>My Tech Stack</h1>
                <h2>Technologies I've been working with recently</h2>
            </HeaderContainer>
            <StackCointainer>
                <ImageContainer>
                    <Render />
                </ImageContainer>
            </StackCointainer>
        </TechCointainer>
    )
}

const TechCointainer = styled.div`

    width: 100%;
    height: 100%;
`;

const HeaderContainer = styled.div`

    width: 100%;
    height: 15%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        
        font-family: 'Poppins';
        font-weight: 700;
        font-size: 48px;
        line-height: 26px;
        color: #42446E;
        margin-bottom: 3%;
        margin-top: 2%;
    }

    h2 {
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 32px;
        line-height: 26px;
        color: #666666;
    }
`;

const StackCointainer = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`

    width: 85%;
    height: 80%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    img {
        margin: 4% 2% 4% 2%;
        cursor: pointer;
        &:hover {
            transform: scale(1.05);
        }
    }
`;