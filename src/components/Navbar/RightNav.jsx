import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 15;
  li {
    padding: 15px 10px;
  }
  a{
    color: white
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = (props) => {

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	useEffect(() => {
		if (userInfo) {
			
		}
		return () => {

		};
	}, [userInfo]);

	return (
		<Ul open={props.open}>
		{ userInfo ? (
				<>
					<li>
						<Link to={'/profile'} >
							{userInfo.user.email}
						</Link>
					</li>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					{	userInfo.user.isAdmin === true && 
						<li>
							<Link to="/products">Products</Link>
						</li>
						
					}
					<li>
						<Link to="/profile">Profile</Link>
					</li>
				</>
			) : (
				<>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/signin'}>Sign In</Link>
					</li>
					<li>
						<Link to={'/register'}>Sign Up</Link>
					</li>
				</>
			)
		}
		
		</Ul>
	)
}

export default RightNav