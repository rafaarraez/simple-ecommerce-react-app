import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  a{
    color: #fff;
    text-decoration: none;
  }
`

const Navbar = () => {
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	console.log(userInfo);
	
	return (

		<Nav>
			<div className="logo">
				<Link to={'/'}> Tiendita </Link>
			</div>
			
			<Burger />
		</Nav>
	)
}

export default Navbar