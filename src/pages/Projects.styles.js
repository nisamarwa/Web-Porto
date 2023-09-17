import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `monospace, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  mainSlide:{
    paddingTop:rem(200)
  },

  category: {
    fontFamily: `monospace, ${theme.fontFamily}`,   
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    fontSize:20,
    textTransform: 'uppercase',
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

