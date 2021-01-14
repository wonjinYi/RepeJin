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

// const RunButton = withstyles(
// })(Button);

export default function InputSection() {
    const classes = useStyles();
    //USE STATE TEXXT, REPS
    return (
        <InputSectionWrap>
            <TextField id="text-input" className={classes.textfield} inputProps={{className: classes.input}} label="Text" />
            <TextField id="reps-input" className={classes.textfield} inputProps={{className: classes.input}} label="Reps" />
            <Button variant="contained" className={classes.button}>DO REPEAT</Button>
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