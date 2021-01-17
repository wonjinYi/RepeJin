import React, { useState } from "react";

import styled from "styled-components";
import SnowStorm from "react-snowstorm";

import UserSetting from "./components/UserSetting";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";

export default function App() {
    const [text, setText] = useState('');
    const [reps, setReps] = useState(0);
    const [settings, setSettings] = useState({});

    return (
        <AppWrap className="App">
            <HeaderWrap>
                <Title>RepeJin</Title>
            </HeaderWrap>

            <UserSetting passUserSettings={setSettings} />

            <ContentWrap>
                <InputSection passText={setText} passReps={setReps} />
                <OutputSection text={text} reps={reps} lengthLimit={settings.lengthLimit} />
            </ContentWrap>

            <FooterWrap>
                Wonjin Yi
            </FooterWrap>
            
            {
                settings.snowstorm
                ? ''
                : <SnowStorm excludeMobile={false} />
            }
            
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