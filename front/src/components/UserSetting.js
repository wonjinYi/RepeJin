import React, { useState } from 'react';

import styled from "styled-components";

export default function App() {

    return (
        <UserSettingWrap className="App">

        </UserSettingWrap>
    );
}

const UserSettingWrap = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

    padding : 1rem;
    margin : 1rem;
    
    background-color : rgba(255,255,255,0.1);
    border-radius : 5px;

    color : white;
`;
