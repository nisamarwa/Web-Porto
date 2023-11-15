import React, { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Paper, Text, Title, Button, rem, useMantineTheme, Space, ActionIcon, Overlay } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import bg from '../images/BOG.jpg';
import miniGameBg from '../images/MiniGameBg.jpg'
import studiogoods from '../images/StudioGoods-Dark.jpg'
import useStyles from './Projects.styles'
import { IconBrandSteam, IconBrandGithub, IconDownload, IconLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import MiniCarousel from '../components/MiniCarousel';

function ProjectCard({ image, title, description, language }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isContributed = title.includes("BATTLE OF GUARDIANS");
  const isMiniGame = title.includes("MINI GAME");
  const isStudioGoods = title.includes("E-Commerce");
  const { classes } = useStyles();

  const cardStyle = {
    backgroundImage: `url(${image})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '20px',
    height: '100%',
    backgroundSize:'100% 100%',
    backgroundColor:'rgba (0, 0, 0, 0.3)'
  };
  
  const handleButtonSteam = () => {
    window.location.href = process.env.REACT_APP_STEAM_LINK;
  };
  
  const handleButtonGithub = () => {
    if(isMiniGame) {
      console.log("IS MINI GAME");
      window.location.href = process.env.REACT_APP_GITHUB_MINIGAME_LINK;
    }
      else {
        console.log('STUDIO GOODS', process.env.REACT_APP_GITHUB_STUDIGOODS)
        window.location.href = process.env.REACT_APP_GITHUB_STUDIGOODS;
      }
    };

  const handleButtonDownload = () => {
    window.location.href = process.env.REACT_APP_DOWNLOAD_LINK;
  };

  const handleButtonLink = () => {
    window.location.href = process.env.REACT_APP_STUDIOGOODS_LINK;
  }
 
  return (
    <Paper shadow="md" p="xl" radius="md" style={cardStyle}>
      <div className={classes.title}>
        <Text style={{fontFamily:'monospace'}} color={theme.white} size="xs">PROJECTS</Text>
        {isContributed && (
          <>
          <Space h={10}/>
          <Text style={{ fontFamily: 'monospace', fontSize: mobile ? 10 : 20 }} color={theme.white}>
            Contributed in
          </Text>
          </>
        )}
        <Title style={{fontFamily:'monospace', fontSize:mobile ? 20 : 50}} color={theme.white}>{title}</Title>
      </div>
      <div style={{width:'70%'}}>
        <Text style={{fontFamily:"'Roboto', monospace", fontSize:mobile ? 9.5 : 14}} color={theme.white}>{description}</Text>
        <Space h={20}/>
        <Text style={{fontFamily:'monospace', fontSize:mobile ? 9.5 : 15}} color={theme.white}>{language}</Text>
        <Space h={50}/>
        {isContributed && (
          <ActionIcon size={mobile ? "md" : 'lg'} radius="xl" variant="outline" onClick={handleButtonSteam}>
            <IconBrandSteam size="1rem" />
          </ActionIcon>
        )}
        {isMiniGame && (
          <div className={classes.buttonMiniGame}>
          <ActionIcon size={mobile ? "md" : 'lg'} radius="xl" variant="outline" onClick={handleButtonGithub}>
            <IconBrandGithub size="1rem" />
          </ActionIcon>
          <Space w={30} />
          <ActionIcon
            size={mobile ? "md" : 'lg'}
            radius="xl"
            variant="outline"
            onClick={handleButtonDownload} 
          >
            <IconDownload size="1rem" />
          </ActionIcon>
          </div>
        )}

        {isStudioGoods && (
          <div className={classes.buttonMiniGame}>
          <ActionIcon size={mobile ? "md" : 'lg'} style={{color: theme.white}} radius="xl" variant="outline" onClick={handleButtonGithub}>
            <IconBrandGithub stroke={theme.white} fill={theme.white} size="1rem" />
          </ActionIcon>
          <Space w={30} />
          <ActionIcon
            size={mobile ? "md" : 'lg'}
            radius="xl"
            variant="outline"
            onClick={handleButtonLink} 
            style={{color:theme.white}}
          >
            <IconLink stroke={3} size="1rem" />
          </ActionIcon>
          </div>
        )}

      </div>
    </Paper>
  );
} 

const projectData = [
  {
    title: 'BATTLE OF GUARDIANS',
    description: 'Managed game data, integrated blockchain payments, and developed user systems in JavaScript and PHP. Visualized user statistics, implemented a game launcher, enabled game streaming in webviews, and led ReactJS and NextJS web development efforts.',
    language:'#ReactJS, #CSharp #PHP, #Firestore, #GoogleDataStudio, #ExpressJS, #SQL #BigQuery',
    image: bg,
  },
  {
    title: 'MINI GAME',
    description: 'Created Classic Tetris and Classic Snake',
    language: '#CSharp',
    image: miniGameBg,
  },
  {
    title: 'E-Commerce Website',
    description: "Created a straightforward e-commerce website featuring Firebase authentication, Cloud Firestore for data storage, and Stripe for seamless and secure online payments.",
    language:'#NextJS, #CloudFirestore, #Mantine #Stripe',
    image: studiogoods,
  },
];
  
export default function ProjectsPage() {
  const theme = useMantineTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const { classes } = useStyles();

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const videoData = [
    {src:require('../videos/Tetris.mp4')},
    {src:require('../videos/Snake.mp4')}
  ];

  const slides = projectData.map((project, index) => (
    <Carousel.Slide key={project.title}>
      <motion.div
      initial={{ y: '-100%', height:'100%' }}
      animate={{ y: 0, height:'100%' }} 
      transition={{ duration: 1, delay: index * 0.2 }} 
      >
        <div style={{height:'100%'}}>
          <ProjectCard
            {...project}
            language={project.language}
          />
        </div>

        {project.title.includes("MINI GAME") &&(
          <div style={{
            right: mobile ? rem(50) : rem(400),
            top: mobile ? rem(200) : rem(150),
            width: mobile ? '70%' :'40%', 
            height: mobile ? '70%': '40%', 
            position:'absolute'
          }} 
          >
            <MiniCarousel
              videoData={videoData}
            />
          </div>
        )}

        {/* {project.title.includes("E-Commerce") &&(
          // <Overlay opacity='0.3'/>
        )} */}
      </motion.div>
    </Carousel.Slide>
  ));

  const slidesToScroll = 1;
  const slideSize = '80%';
  const slideGap = rem(20);
  const paddingTop= rem(40);
  const paddingSide= rem(10);
  const paddingBot= rem(30);

  return (
    <div>
      <Carousel
        slideSize={slideSize}
        slideGap={slideGap}
        slidesToScroll={slidesToScroll}
        align={'center'}
        loop
        dragFree
        withControls={false}
        withIndicators={true}
        style={{ width: '100%', margin: 0 , padding: mobile ? `${paddingTop} ${paddingSide} ${paddingBot} ${paddingSide}`: rem(80), }}
        viewport={{
          height: rem(700),
          width: '100%',
        }}
        // indicator={{
        //   bottom: mobile ? rem(-100):rem(100)
        // }}
        controlsOffset={10}
        height={rem(700)}
        classNames={{
          indicator: classes.carouselIndicator,
        }}
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 2 },
        ]}
      >
        {slides}
      </Carousel>
    </div>
  );
}



