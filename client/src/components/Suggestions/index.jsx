import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Avatar,
    Typography
} from '@material-ui/core';
// import { red, blue, green, amber } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    suggestionBox: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    paper: {
        padding: 10
    },
    suggestedUsers: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    suggestionHeader: {
        textAlign: 'center'
    }
}))

const Suggestions = (props) => {
    const styles = useStyles();

    return (
        <div className={styles.suggestionBox}>
            <Paper className={styles.paper}>
                <Typography variant='h6' className={styles.suggestionHeader}>Suggestions for you</Typography>
                <Typography variant="p" className={styles.suggestedUsers}>
                    <Avatar aria-label="recipe" style={{backgroundColor: props.avatarColor}}>
                        {props.initial}
                    </Avatar>
                    {props.suggestedUser}
                </Typography>
            </Paper>

        </div>
    );
};

export default Suggestions;