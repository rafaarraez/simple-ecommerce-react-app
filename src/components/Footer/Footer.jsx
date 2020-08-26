import React from 'react';
import styled from 'styled-components';
const Foooter = styled.footer`
    display: table;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    background-color: #263543;
    width: 100%;
    height: 3rem;
}
p{
    margin-top: 1rem;
}
`
const Footer = () => {
    return(
        <Foooter>
            <p>Rafael Estuvo Aquí</p>
        </Foooter>
    )
}

export default Footer;