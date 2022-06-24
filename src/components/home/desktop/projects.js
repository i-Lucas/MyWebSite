import React from 'react';
import styled from 'styled-components';
import Goto from '../../resources/goto';
import projects from '../../../assets/projects/src/projects';

export default function Projects() {

    return (
        <ProjectsContainer id='projects'>
            <HeaderContainer>
                <h1>Projects</h1>
                <h2>Some things I've built so far</h2>
            </HeaderContainer>
            <ContentContainer>
                <Content>

                    {projects.sort(() => Math.random() - 0.5).map((project, index) => {
                        return (
                            <ProjectBox key={index}>
                                <Image src={project.image} size={project.size} />
                                <Title><h1>{project.tile}</h1></Title>
                                <Description><h1>{project.description}</h1></Description>
                                <Footer>
                                    <Stack><h1><span>Tech stack</span> : {project.tech}</h1></Stack>
                                    <Links>
                                        <ion-icon name="link-outline"></ion-icon>
                                        <h1 onClick={() => Goto(project.preview)}>Live Preview</h1>
                                        <ion-icon name="logo-github"></ion-icon>
                                        <h1 onClick={() => Goto(project.github)}>View Code</h1>
                                    </Links>
                                </Footer>
                            </ProjectBox>
                        )
                    })}

                </Content>
            </ContentContainer>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`

    width: 100%;
    height: 220%;
    margin-top: 15%;
`;

const HeaderContainer = styled.div`

    width: 100%;
    height: 10%;

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
        margin-top: 10%;
        margin-bottom: 3%;
    }

    h2 {
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 32px;
        line-height: 26px;
        color: #666666;
        margin-bottom: 10%;
    }
`;

const ContentContainer = styled.div`

    width: 100%;
    height: 80%;
    margin-top: 5%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`

    width: 90%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const ProjectBox = styled.div`

    width: 25%;
    height: 45%;
    margin: 1%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    background: #FFFFFF;
    box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.2);
    border-radius: 20px;

    &:hover {
       transform: scale(1.01);
       box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.5);
    }
`;

const Image = styled.div`

    width: 100%;
    height: 45%;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-image: url(${props => props.src});
    //background-size: 40%;
    background-size: ${props => props.size}%;
    background-position: center;
    background-repeat: no-repeat;
`;

const Title = styled.div`

    width: 100%;
    height: 8%;

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        color: #000000;
    }
`;

const Description = styled.div`

    width: 90%;
    height: 32%;

    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        
        font-family: 'Poppins';
        font-weight: 300;
        font-size: 17px;
        line-height: 24px;
        color: #666666;
        margin-left: 5%;
        margin-right: 5%;
    }
`;

const Footer = styled.div`

    width: 100%;
    height: 15%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
`;

const Stack = styled.div`

    width: 90%;
    height: 60%;

    display: flex;
    justify-content: center;
    align-items: center;

    span { font-weight: 650; }

    h1 {

        font-family: 'Poppins';
        font-weight: 400;
        font-size: 15px;
        color: #42446E;
    }
`;

const Links = styled.div`

    width: 90%;
    height: 50%;

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    h1 {
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        text-decoration-line: underline;
        color: #000000;
        cursor: pointer;
    }
`;