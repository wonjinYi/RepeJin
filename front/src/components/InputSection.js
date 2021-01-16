import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root : {
        
    },
    textfield : {
        //borderColor : 'white',
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

const passStates = (text, reps) => {
    console.log(`text : ${text} / reps : ${repx}`);
}

export default function InputSection() {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [reps, setReps] = useState(1);

    return (
        <InputSectionWrap>
            <TextField id="text-input" className={classes.textfield} inputProps={{className: classes.input}} label="Text" onChange={ (e) => { setText(e.target.value) } } />
            <TextField id="reps-input" className={classes.textfield} inputProps={{className: classes.input}} label="Reps" onChange={ (e) => { setReps(e.target.value) } } />
            <Button variant="contained" className={classes.button} onClick={ () => { passStates(text, reps) } }>DO REPEAT</Button>
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