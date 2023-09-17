import './Home.css';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';

function HomePage() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: 0, transition: { duration: 1 } }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontFamily: 'monospace',
            fontSize: mobile ? 30 : 50,
          }}
        >
          HELLO, I'M MARWA KHAIRUNNISA
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0, transition: { duration: 1 } }}
      >
        <div className="App">
          <div className="SummaryApp">
            <p style={{ fontFamily: 'monospace', fontSize: mobile ? 10 : 15 }}>
              Experienced in backend programming with over a year of game programming, including a three-month internship. Skilled in database and server management, feature implementation, and web aspects of games. Passionate about this work and confident in making impactful contributions to backend development projects.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
