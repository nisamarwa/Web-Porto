import {
    createStyles,
    rem,
  } from '@mantine/core';
  
  export default createStyles((theme) => ({
    wrapper: {
      minHeight: 400,
      boxSizing: 'border-box',
      backgroundColor:theme.colorScheme === 'dark' ? theme.colors.dark[10] : theme.white,
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[8],
      borderRadius: theme.radius.md,
      marginTop:rem(150),
      padding: `calc(${theme.spacing.xl} * 2.5)`,
  
      [theme.fn.smallerThan('sm')]: {
        padding: `calc(${theme.spacing.xl} * 1.5)`,
      },
    },
  
    title: {
      fontFamily: `monospace, ${theme.fontFamily}`,
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[8],
      lineHeight: 1,
    },

    leftColumn: {
        paddingLeft:rem(350),
        width:'100%'
      },
  
    description: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[8],
      maxWidth: rem(300),
      fontFamily: `monospace, ${theme.fontFamily}`,
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },
  
    form: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3],
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[8],
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
    },
  
    social: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[8],
  
      '&:hover': {
        color: theme.colors[theme.primaryColor][1],
      },
    },
  
    input: {
      backgroundColor: theme.white,
      borderColor: theme.colors.gray[4],
      color: theme.black,
  
      '&::placeholder': {
        color: theme.colors.gray[5],
      },
    },
  
    inputLabel: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[8],
    },
  
    control: {
      backgroundColor: theme.colors.dark[4],
    },
  }));
  
