import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 20,
    margin: '20px 0',
    padding: '14px 36px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.18)',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '16px',
    },
  },

  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },

  image: {
    marginLeft: '14px',
    height: '50px',
    transition: 'transform 0.35s ease',

    '&:hover': {
      transform: 'rotate(8deg) scale(1.12)',
    },
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',

    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: '12px',
    },
  },

  profile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },

  userName: {
    marginLeft: '12px',
    marginRight: '12px',
    color: '#ffffff',
    fontWeight: 500,
  },

  logout: {
    marginLeft: '20px',
    borderRadius: '20px',
    transition: 'all 0.3s ease',

    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
    },
  },

  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
