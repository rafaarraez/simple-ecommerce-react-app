import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  height: 55px;
  background-color: #263543;
  color: #fff;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    font-weight: bolder;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Tiendita
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar