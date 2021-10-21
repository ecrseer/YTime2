import { makeStyles } from '@material-ui/core';
import Link from 'next/link';
import { stylex } from './BackButton.css.js';

const useStyles = makeStyles(stylex);
export default function BackBtn({originalVideo,timedVideo}){
    const classes = useStyles();
    return(
        <div>
           Volte pro youtube<br/>
            <Link href={originalVideo} >
             <a className={classes.root}>Video original</a>
            </Link>
            <br/><br/>
           Ver onde o video vai começar.<br/>
            <Link href={timedVideo} >
             <a className={classes.root}>Video no ponto</a>
            </Link>
        </div>
    )
}