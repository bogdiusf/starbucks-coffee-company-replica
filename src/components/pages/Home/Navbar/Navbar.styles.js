const HomeStyles = {
  nav: {
    padding: [25, 120],
    boxShadow: '0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%)',
    display: 'flex',
    justifyContent: 'space-between',
    '@media screen and (max-width: 767px)': {
      padding: 16
    },
    '@media screen and (min-width: 768px) and (max-width:1023px)': {
      padding: [20, 24]
    },
    '@media screen and (min-width: 1024px) and (max-width: 1200px)': {
      padding: [25, 40]
    },

  },

  // --------------------------------------Left side-------------------------- //

  leftSideNav: {
    display: 'flex',
    gap: 20,
    alignItems: 'center',
  },

  stbIcon: {
    width: 51,
    '@media screen and (max-width: 767px)': {
      width: 40
    },
  },

  leftLinks: {
    display: 'flex',
    gap: 20,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: 14,
    marginLeft: 20,
    '& > *': {
      letterSpacing: 1.4,
    },

    '@media screen and (max-width: 767px)': {
      display: 'none'
    },
  },

  // ---------------------------------------Right side------------------------- //

  rightSideNav: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: 0.4,

    '@media screen and (max-width: 767px)': {
      display: 'none'
    },
  },

  lctnIcon: {
    width: 24,
    transition: '0.2s ease all',
  },

  findStore: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    textAlign: 'start',
    marginRight: 40,
    lineHeight: '21px',
    transition: '0.2s ease all',
    '&:hover svg': {
      cursor: 'pointer',
      fill: '#00754a',
    },
    '&:hover': {
      color: '#00754a',
      cursor: 'pointer',
    }
  },

  signInButton: {
    border: '1px solid black',
    borderRadius: 50,
    padding: [6, 16],
    marginRight: 16,
    transition: '0.3s ease all',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,.1)',
      cursor: 'pointer',
    }
  },

  joinNowButton: {
    border: '1px solid black',
    borderRadius: 50,
    padding: [6, 16],
    color: '#fff',
    backgroundColor: '#000',
    transition: '0.3s ease all',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,.7)',
      cursor: 'pointer',
    }
  },

  // ---------------------------Burger menu ------------------------------------- //

  burgerIcon: {
    '@media screen and (max-width: 767px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      transition: '0.3s ease-out',
      padding: [0, 10],
      borderRadius: '50%',

      '&:hover': {
        backgroundColor: 'rgba(0,0,0,.1)',
        cursor: 'pointer'
      },

      '& > span': {
        width: 20,
        height: 2,
        backgroundColor: 'rgba(0,0,0,.58)',
        borderRadius: 50
      }
    },

  }
}

export default HomeStyles