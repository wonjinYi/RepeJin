import styled from "styled-components";
import { InputSection, OutputSection } from "./components";

export default function App() {
    return (
        <AppWrap className="App">
            <HeaderWrap>
                <Title>RepeJin</Title>
            </HeaderWrap>

            <ContentWrap>
                <InputSection />
                <OutputSection />
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

    border : 1px solid white;
`;

const FooterWrap = styled.div`
`;

const Title = styled.h1`
    font
`;