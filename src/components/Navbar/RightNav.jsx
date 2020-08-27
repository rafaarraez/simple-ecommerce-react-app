import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user.action';

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

const RightNav = (...props) => {

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const dispatch = useDispatch();
	useEffect(() => {
		if (userInfo) {
			
		}
		return () => {

		};
	}, [userInfo]);

	const handleLogout = () => {
		dispatch(logout());
		props.history.push("/");
	}

	return (
		<Ul open={props.open}>
		{ userInfo ? (
				<>
					<li>
						{userInfo.user.email}
					</li>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					{	userInfo.user.isAdmin == 1 && 
						<li>
							<Link to="/products">Products</Link>
						</li>
						
					}
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<Link onClick={handleLogout}>Logout</Link>
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