import styled from "styled-components";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    button : {
        marginTop : '0.5rem',
        marginBottom : '0.5rem',
    }
});

export default function OutputSection({ text, reps }) {
    const classes = useStyles();

    return (
        <OutputSectionWrap>

            <Button variant="contained" className={classes.button}>COPY IT</Button>

            <ResultWrap>
                <Result>{text}{reps}</Result>
            </ResultWrap>            
            
        </OutputSectionWrap>
    );
}

const OutputSectionWrap = styled.div`
    display : flex;
    flex-direction : column;

    padding : 1rem;
    margin : 1rem;

    border : 1px solid white;
`;

const ResultWrap = styled.div`
    display : inherit;
    justify-content : center;

    background-color : white;
    border-radius : 5px;

    margin-top : 0.5rem;
    margin-bottom : 0.5rem;

    padding-left : 0.5rem;
    padding-right : 0.5rem;
`;

const Result = styled.p`
    color : black;
    
    word-break: break-all;
    overflow-wrap: break-word; 
`;