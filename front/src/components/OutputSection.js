import React, { useState } from 'react';

import styled from "styled-components";
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


export default function OutputSection({ text, reps }) {
    const [open, setOpen] = useState(false); 
    const [severity, setSeverity] = useState(''); // 'info' , 'warning'

    const result = makeResult(text, reps);
    const classes = useStyles();

    return (
        <OutputSectionWrap>
            <CopyToClipboard text={result}>
                <Button variant="contained" className={classes.button} onClick={ () => {openCopyNoti(result.length, setOpen, setSeverity)} }>COPY IT</Button>
            </CopyToClipboard>

            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{vertical:'bottom', horizontal:'left'}} onClose={ () => {closeCopyNoti(setOpen)} }>
                <Alert severity={severity} onClose={ () => {closeCopyNoti(setOpen)} }>
                {
                    severity === 'info'
                    ? 'Copied!' 
                    : 'There is no content'
                }
                </Alert>
            </Snackbar>

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

const openCopyNoti = (len, setOpen, setSeverity) => {

    //validation
    if(len>0){
        console.log('copied');
        setSeverity('info')
    }
    else {
        console.warn('[Validate Issue] The result is Empty String : OutputSection.js');
        setSeverity('warning')
    }

    setOpen(true);
}

const closeCopyNoti = (setOpen) => {
    setOpen(false);
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
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

    background-color : rgba(255,255,255,0.1);
    border-radius : 5px;

    @media(max-width : 768px){
        width : 95%;
    }
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