import React, { useState } from 'react';
import styled from "styled-components";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const passStates = (text, reps, passText, passReps) => {
    reps = parseInt(reps)
    console.log(`text : ${text} ${typeof reps}/ reps : ${reps} ${typeof reps}`);
    
    // < validate inputs >
        // 01. Empty input
    if( text==='' || reps==='' ){
        console.warn('[Validate Issue] Empty input : InputSection.js');
        return;
    }
        // 02. Reps is NaN
    if( Number.isNaN(reps) ){
        console.warn('[Validate Issue] reps is NaN : InputSection.js');
        return;
    }

    // < set State of Parent component >
    passText(text); 
    passReps(reps);
}

export default function InputSection({ passText, passReps }) {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [reps, setReps] = useState('');

    return (
        <InputSectionWrap>
            <TextField id="text-input" className={classes.textfield} inputProps={{className: classes.input}} label="Text" onChange={ (e) => { setText(e.target.value) } } />
            <TextField id="reps-input" className={classes.textfield} inputProps={{className: classes.input}} label="Reps" onChange={ (e) => { setReps(e.target.value) } } />
            <Button 
                variant="contained" 
                className={classes.button} 
                onClick={ () => { passStates(text, reps, passText, passReps) } }
            >
                DO REPEAT
            </Button>
        </InputSectionWrap>
    );
}

const InputSectionWrap = styled.div`
    display : flex;
    flex-direction : column;
    
    padding : 1rem;
    margin : 1rem;
    border : 1px solid white;
`;

const useStyles = makeStyles({
    root : {
        
    },
    textfield : {
        padding : '0.5rem',
        color : 'white',
        '& label' : {
            color : 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        "& .MuiInput-underline:before": {
            borderBottom: "none"
        },
        "& .MuiInput-underline:hover::before": {
            borderBottomColor: "white"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "white"
          }
    },
    input : {
        color : 'white',
    },

    button : {
        marginTop : '0.5rem',
        marginBottom : '0.5rem',
    }
});