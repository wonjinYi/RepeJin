import React, { useState } from 'react';

import styled from "styled-components";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function UserSetting({passUserSettings}) {
    const [settings, setSettings] = useState({
        lengthLimit: true,
        snowstorm : true,
    });

    const handleChange = (event) => {
        setSettings({ ...settings, [event.target.name]: event.target.checked });
        
        passUserSettings(settings);
    }

    return (
        <UserSettingWrap className="UserSetting">
            <FormGroup column>
                <FormControlLabel
                    control={ <Switch checked={settings.lengthLimit} onChange={handleChange} name="lengthLimit" color="primary" /> }
                    label="Output length up to 2000" labelPlacement="start"
                />
                <FormControlLabel
                    control={ <Switch checked={settings.snowstorm} onChange={handleChange} name="snowstorm" color="primary" /> }
                    label="Snow Storm" labelPlacement="start"
                />
            </FormGroup>
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

    @media(max-width : 768px){
        width : 80%;
    }
`;
