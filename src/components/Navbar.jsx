import { useState, useEffect } from 'react';
import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Text,
  rem,
  Image
} from '@mantine/core';
import useStyles from './Navbar.styles'
import { useDisclosure } from '@mantine/hooks';
import ColorSwitchToggle from './ColorSchemeToggle';
import { Link } from 'react-router-dom'
import logo from '../images/LogoName.png'

const HEADER_HEIGHT = rem(60);
const links = [
  {
    label : "HOME",
    link: "/",
  },
  {
    label : "PROJECTS",
    link: "/projects",
  },
  {
    label : "CONTACTS",
    link: "/contacts",
  }
]

export function HeaderResponsive() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link); 
  const { classes, cx } = useStyles();

  

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  // Create a link element
const fontLink = document.createElement('link');

// Set the attributes for the link
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@700&display=swap'; // Replace with the actual link

// Append the link to the head of the document
document.head.appendChild(fontLink);


  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Link to="/" style={{ textDecoration: 'none', color:"black" }}>
          <Text size={30} fw={100} style={{ fontFamily: 'Lexend Deca, sans-serif'}} >MARWA</Text>
        </Link>
        {/* <Image maw={150} src={logo}/> */}
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <ColorSwitchToggle/>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}