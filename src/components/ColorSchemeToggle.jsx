import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const animationStyle = `
  body {
    transition: background-color 1s ease;
  }

  body.dark-theme {
    background-color: #1A1B1E; /* Warna latar belakang untuk tema gelap */
    color: #fff; /* Warna teks untuk tema gelap */
  }
`;

function ColorSwitchToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const handleThemeToggle = () => {
    toggleColorScheme();
    document.body.classList.toggle('dark-theme', dark);
  };

  return (
    <>
      <style>{animationStyle}</style>
      <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
      </ActionIcon>
    </>
  );
}

export default ColorSwitchToggle