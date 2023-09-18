import React, { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Paper, Text, Title, Button, rem, useMantineTheme, Space, ActionIcon } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import bg from '../images/BOG.jpg';
import useStyles from './Projects.styles'
import { IconBrandSteam, IconBrandGithub, IconDownload } from '@tabler/icons-react';
import { motion } from 'framer-motion';

function ProjectCard({ image, title, description, language }) {
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
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const handleButtonClick = () => {
    window.location.href = 'https://store.steampowered.com/app/2286560/Battle_of_Guardians/';
  };
  const isContributed = title.includes("BATTLE OF GUARDIANS");
  const isMiniGame = title.includes("MINI GAME");

  return (
    <Paper shadow="md" p="xl" radius="md" style={cardStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Text style={{fontFamily:'monospace'}} color={theme.white} size="xs">PROJECTS</Text>
        {isContributed && (
          <>
          <Space h={10}/>
          <Text style={{ fontFamily: 'monospace', fontSize: mobile ? 10 : 20 }} color={theme.white}>
            Contributed in
          </Text>
          </>
        )}
        <Title style={{fontFamily:'monospace', fontSize:mobile? 20 : 50}} color={theme.white}>{title}</Title>
      </div>
      <div style={{width:'70%'}}>
        <Text style={{fontFamily:"'Roboto', monospace", fontSize:mobile?9.5:14}} color={theme.white}>{description}</Text>
        <Space h={20}/>
        <Text style={{fontFamily:'monospace', fontSize:mobile?9.5:15}} color={theme.white}>{language}</Text>
        <Space h={50}/>
        {isContributed && (
          <ActionIcon size={mobile ? "md" : 'lg'} radius="xl" variant="outline" onClick={handleButtonClick}>
            <IconBrandSteam size="1rem" />
          </ActionIcon>
        )}
        {isMiniGame && (
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <ActionIcon size={mobile ? "md" : 'lg'} radius="xl" variant="outline" onClick={handleButtonClick}>
            <IconBrandGithub size="1rem" />
          </ActionIcon>
          <Space w={30} />
          <ActionIcon
            size={mobile ? "md" : 'lg'}
            radius="xl"
            variant="outline"
            onClick={handleButtonClick} // Buat fungsi handleDownloadButtonClick sesuai kebutuhan Anda
          >
            <IconDownload size="1rem" />
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
    image: bg,
  },
  {
    title: 'Project 3',
    description: 'Description for Project 2',
    language:'#ReactJS, #CSharp #PHP, #Firestore, #GoogleDataStudio, #ExpressJS, #SQL #BigQuery',
    image: bg,
  },
];
  
export default function ProjectsPage() {
  const theme = useMantineTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const { classes } = useStyles();

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = projectData.map((project, index) => (
    <Carousel.Slide key={project.title}>
      <motion.div
      initial={{ y: '-100%', height:'100%' }}
      animate={{ y: 0, height:'100%' }} 
      transition={{ duration: 1, delay: index * 0.2 }} 
      >
        <ProjectCard
          {...project}
          language={project.language}
        />
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
        dragFree//={!isOverlayActive}
        withControls={false}
        withIndicators={true}
        style={{ width: '100%', margin: 0 , padding: mobile ? `${paddingTop} ${paddingSide} ${paddingBot} ${paddingSide}`: rem(80), }}
        viewport={{
          height: rem(700),
          width: '100%',
        }}
        indicator={{
          bottom: mobile ? rem(-100):rem(100)
        }}
        controlsOffset={10}
        height={rem(700)}
        classNames={{
          indicator: classes.carouselIndicator,
          //  indicators: classes.indi
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
