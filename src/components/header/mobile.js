import React from 'react';
import styled from 'styled-components';

export default function MobileHeader() {

    return (
        <HeaderMobile >
        </HeaderMobile>
    )
}

const HeaderMobile = styled.div`

    width: 100%;
    height: 8%;
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: #202020;
`;