import React, { useState } from 'react';

import styled from "styled-components";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";

export default function App() {
    const [text, setText] = useState('');
    const [reps, setReps] = useState(0);

    return (
        <AppWrap className="App">
            <HeaderWrap>
                <Title>RepeJin</Title>
            </HeaderWrap>

            <ContentWrap>
                <InputSection passText={setText} passReps={setReps} />
                <OutputSection text={text} reps={reps} />
            </ContentWrap>

            <FooterWrap>
                Wonjin Yi
            </FooterWrap>
        </AppWrap>
    );
}

const AppWrap = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

    color : white;
`;

const HeaderWrap = styled.div`
    display : inherit;
`;

const ContentWrap = styled.div`
    display : inherit;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

const FooterWrap = styled.div`
`;

const Title = styled.h1`
    font-size : 50px;
`;