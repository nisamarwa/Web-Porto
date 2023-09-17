import { createStyles } from '@mantine/core';


export default createStyles((theme, { variant }) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[8],
  },

  icon: {
    marginRight: theme.spacing.md, 
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[8]//variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[8],//variant === 'gradient' ? theme.black : theme.white,
    fontFamily: `monospace, ${theme.fontFamily}`,
  },
}));





