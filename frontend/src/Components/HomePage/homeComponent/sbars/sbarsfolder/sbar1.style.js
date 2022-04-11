import { makeStyles } from '@mui/styles';
import imgCar from './imgcar.jpg'

const useStyles = makeStyles({
    "& *": {

    },
    searchInputs: {
        display: 'flex',
    },
    search: {

        "& input": {
            backgroundColor: '#fff',
            border: '#fff',
            fontSize: '20px',
            padding: '15px',
            height: '50px',
            width: '260px',
        },
    },
    "& input:Focus": {
        outline: 'none',
    },
    dataResult: {
        "& dataResult::-webkit-scrollbar": {
            display: 'none',
        },
        marginTop: '5px',
        width: '260px',
        height: '200px',
        backgroundColor: '#fff',
        boxShadow: 'rgba(0,0,0,0.35) 0px, 5px, 15px',
        overflow: 'hidden',
        overflowY: 'auto',
    },
    dataItem:{
        "& p":{
            paddingLeft: '20px',
            height: '40px',
            cursor: 'pointer',
        },
        "& p:hover": {
            backgroundColor: 'lightgrey',
            width: '100%',

        },

        color: 'black',
        textDecoration: 'none',
        alignItems: 'center',
        display: 'flex',
    },

    searchIcon: {
        height: '50px',
        width: '50px',
        backgroundColor: '#fff',
        display: 'grid',
        placeItems: 'center',
        marginRight: '20px',
    },

    searchbars: {
        display: 'flex',
        width: '81%',
        marginLeft: '15%',
        marginTop: '7%',
    },
    homepage1: {
        height: '100vh',
        width: '98.8vw',
        backgroundImage: `url(${imgCar})`,
        backgroundSize: 'cover',
        marginTop: '-106px',
    },
    text: {
        marginTop: '8%',
        color: 'black',
        fontWeight: '600',
        textAlign : 'center',
        fontSize: '1.8rem',
        "& h1": {
            fontWeight: '900',

        },
    },


})

export default useStyles