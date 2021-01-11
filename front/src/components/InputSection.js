import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function InputSection() {
    return (
        <InputSectionWrap>
            <TextField id="standard-basic" label="Text" />
            <TextField id="standard-basic" label="Reps" />
            <Button variant="contained">DO REPEAT</Button>
        </InputSectionWrap>
    );
}

const InputSectionWrap = styled.div`
    display : flex;
    flex-direction : column;
`;