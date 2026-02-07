import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9 aspect ratio (KEEP THIS)
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },

  border: {
    border: 'solid',
  },

  fullHeightCard: {
    height: '100%',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 16,
    height: '100%',
    position: 'relative',
    backgroundColor: '#fff',

    /* NEW – modern shadow + smooth hover */
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',

    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 16px 40px rgba(0,0,0,0.14)',
    },
  },

  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },

  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },

  grid: {
    display: 'flex',
  },

  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },

  title: {
    padding: '0 16px',
    fontWeight: 600,
  },

  cardActions: {
    padding: '0 16px 12px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },

  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
}));
