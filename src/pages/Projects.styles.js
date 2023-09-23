import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({

  title:{
    display: 'flex', 
    flexDirection: 'column', 
    height: '100%'
  },

  buttonMiniGame:{
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  
  carouselIndicator: {
    width: rem(7),
    height: rem(7),
    transition: 'width 250ms ease',
    backgroundColor:theme.colorScheme === 'dark' ? theme.white : theme.black,

    '&[data-active]': {
      width: rem(16),
    }, 
    '& .mantine-carousel-indicators': {
      bottom: theme.spacing.xs, // Adjust the spacing as needed
    },
  },
  
}));

