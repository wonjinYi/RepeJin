import styled from "styled-components";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root : {
        
    },
    textfield : {
        borderColor : 'white',
        '& label' : {
            color : 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '&.MuiTextField-root .MuiOutlinedInput-notchedOutline': {
            color : 'white',
            borderColor : 'white',
        }
    }
});

// const RunButton = withstyles(
// })(Button);

export default function InputSection() {
    const classes = useStyles();

    return (
        <InputSectionWrap>
            <TextField id="text-input" className={classes.textfield} label="Text" />
            <TextField id="reps-input" className={classes.textfield} label="Reps" />
            <Button variant="contained">DO REPEAT</Button>
        </InputSectionWrap>
    );
}

const InputSectionWrap = styled.div`
    display : flex;
    flex-direction : column;
`;