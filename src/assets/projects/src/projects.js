import zap1 from '../img/zap1.svg';
import driveneats from '../img/de.svg';
import uol from '../img/uol.svg';
import twt from '../img/twt.svg';
import linkr from '../img/linkr.png';
import wallet from '../img/wallet.png';

const projects = [
    {
        image: zap1,
        size: 40, // 40%
        tile: 'ZapRecall',
        description: `One of the first projects made in React, this is a simple application made to train the manipulation of states between components.`,

        tech: 'JavaScript, React',
        preview: 'https://projeto8-zaprecall-eosin.vercel.app/',
        github: 'https://github.com/i-Lucas/projeto8-zaprecall'
    },
    {
        image: driveneats,
        size: 60, // 60%
        tile: 'DrivenEats',
        description: `this was one of the first responsive web projects I did using JavaScript, a mini delivery system. I loved doing it and I'm very proud of it.`,
        tech: 'HTML, JavaScript, CSS',
        preview: 'https://2fgl6.csb.app/',
        github: 'https://github.com/i-Lucas/projeto3-driveneats'
    },
    {
        image: uol,
        size: 95,
        tile: 'UOL chat',
        description: `this project was amazing. in addition to the design, the big challenge is to receive and manage messages from a API backend.`,
        tech: 'HTML, JavaScript, CSS',
        preview: 'https://0j3q1.csb.app/',
        github: 'https://github.com/i-Lucas/projeto5-batepapo-uol'
    },
    {
        image: twt,
        size: 60,
        tile: 'Tweteroo',
        description: `My first backend project was building the Tweteroo API, a clone of Twitter!`,
        tech: 'Node, Express',
        preview: 'https://i-lucas.github.io/projeto6-buzzquiz/',
        github: 'https://github.com/i-Lucas/projeto11-tweteroo'
    },
    {
        image: linkr,
        size: 80,
        tile: 'Project Title',
        description: `this was by far the most challenging project. a social network for sharing links, made collaboratively in a team of 4 members. a very big project!`,
        tech: 'React, Node, Postgre',
        preview: 'https://linkr-front-rho.vercel.app/',
        github: 'https://github.com/Brenoqn2/linkr-front'
    },
    {
        image: wallet,
        size: 55,
        tile: 'MyWallet',
        description: `there's a very cool project. is a fullstack finance system, which uses mongodb atlas to persist data. also has registration and login.`,
        tech: 'React, Node, MongoDB',
        preview: 'https://projeto13-mywallet-front-livid.vercel.app/',
        github: 'https://github.com/i-Lucas/projeto13-mywallet-front'
    },
]

export default projects;