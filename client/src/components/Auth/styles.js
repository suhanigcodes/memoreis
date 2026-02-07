import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    borderRadius: 20,
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },

  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },

  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
    },

    '& .MuiOutlinedInput-root': {
      borderRadius: 10,
      transition: 'box-shadow 0.15s ease, border-color 0.15s ease',

      '&.Mui-focused': {
        boxShadow: '0 0 0 3px rgba(63,81,181,0.15)',
      },
    },
  },

  submit: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5),
    borderRadius: 30,
    fontWeight: 600,
    letterSpacing: '0.5px',
    boxShadow: '0 10px 20px rgba(63,81,181,0.3)',
    transition: 'background-color 0.2s ease, box-shadow 0.2s ease',

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: '0 12px 24px rgba(63,81,181,0.4)',
    },
  },

  googleButton: {
    marginTop: theme.spacing(2),
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
    border: '1px solid #d9d9d9',
    transition: 'border-color 0.15s ease',

    '& iframe': {
      width: '100% !important',
      minWidth: '100% !important',
    },

    '& > div': {
      width: '100% !important',
    },

    '&:hover': {
      borderColor: '#000',
    },
  },
}));
