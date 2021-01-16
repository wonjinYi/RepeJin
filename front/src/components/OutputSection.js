import styled from "styled-components";
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



export default function OutputSection({ text, reps }) {
    const classes = useStyles();
    const result = makeResult(text, reps);

    return (
        <OutputSectionWrap>
            <CopyToClipboard text={result}>
                <Button variant="contained" className={classes.button} onClick={ () => { copyNoti(result.length) } }>COPY IT</Button>
            </CopyToClipboard>

            <ResultWrap>
                <Result>{result}</Result>
            </ResultWrap>            
            
        </OutputSectionWrap>
    );
}

const makeResult = (text, reps) => {
    let str = ''
    for(let i=0; i<reps; i++){
        str += text;
    }

    return str;
} 

const copyNoti = (len) => {

    //validation
    if(len===0){
        console.warn('[Validate Issue] The result is Empty String : OutputSection.js');
        return;
    }

    console.log('copied');
}


const useStyles = makeStyles({
    button : {
        marginTop : '0.5rem',
        marginBottom : '0.5rem',
    }
});

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