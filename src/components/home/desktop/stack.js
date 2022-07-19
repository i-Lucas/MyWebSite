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
import prisma from '../../../assets/img/prisma.svg';
import jest from '../../../assets/img/jest.svg';

export default function TechStack() {

    const ImgAndLink = [
        { img: ajax, link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX', width: '12%' },
        { img: aws, link: 'https://aws.amazon.com/', width: '12%' },
        { img: babel, link: 'https://babeljs.io/', width: '12%' },
        { img: css, link: 'https://www.w3schools.com/css/', width: '5%' },
        { img: docker, link: 'https://www.docker.com/', width: '12%' },
        { img: express, link: 'https://expressjs.com/', width: '12%' },
        { img: git, link: 'https://git-scm.com/', width: '12%' },
        { img: heroku, link: 'https://www.heroku.com/', width: '12%' },
        { img: html, link: 'https://www.w3schools.com/html/', width: '5%' },
        { img: js, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', width: '5%' },
        { img: linux, link: 'https://www.linux.org/', width: '12%' },
        { img: mongo, link: 'https://www.mongodb.com/', width: '12%' },
        { img: node, link: 'https://nodejs.org/en/', width: '12%' },
        { img: posgrees, link: 'https://www.postgresql.org/', width: '12%' },
        { img: react, link: 'https://reactjs.org/', width: '5%' },
        { img: redis, link: 'https://redis.io/', width: '5%' },
        { img: rest, link: 'https://restfulapi.net/', width: '12%' },
        { img: ts, link: 'https://www.typescriptlang.org/', width: '5%' },
        { img: vercel, link: 'https://vercel.com/', width: '12%' },
        { img: webpack, link: 'https://webpack.js.org/', width: '12%' },
        { img: prisma, link: 'https://www.prisma.io/', width: '12%' },
        { img: jest, link: 'https://jestjs.io/', width: '12%' }
    ];

    const Render = () =>
        ImgAndLink.sort(() => Math.random() - 0.5).map((elm, i) =>
            <img key={i} width={elm.width} src={elm.img} onClick={() => window.open(elm.link, '_blank')} />)

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

    width: 90%;
    height: 85%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    img {

        margin: 4% 1% 4% 1%;
        cursor: pointer;
        &:hover {
            transform: scale(1.05);
        }
    }
`;