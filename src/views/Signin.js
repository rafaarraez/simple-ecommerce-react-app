import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../redux/actions/user.action';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10rem;
}
.form-container {
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 2rem;
  border: 0.1rem #c0c0c0 solid;
  border-radius: 0.5rem;
  list-style-type: none;
}
.form-container li {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
input {
  padding: 1rem;
  border: 0.1rem #c0c0c0 solid;
  border-radius: 0.5rem;
}
.button {
    padding: 1rem;
    border: 0.1rem #808080 solid;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  .button:hover {
    border: 0.1rem #404040 solid;
  }
.button.primary {
    background-color: #f0c040;
  }
  @media(max-width: 375px ){
    .form-container {
        width: 15rem;

      }
  }
`;

const Signin = (props) => {
    
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const userSignin = useSelector(state => state.userSignin);
	const { loading, userInfo, error } = userSignin;
	const dispatch = useDispatch();
	const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
	useEffect(() => {
		if (userInfo) {
		props.history.push(redirect);
		}
		return () => {
		//
		};
	}, [userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(signin(email, password));

	}
    return (
        
        <Div className="form">
            <form onSubmit={submitHandler} >
                <ul className="form-container">
                    <li>
                    	<h2>Sign-In</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Signin</button>
                    </li>
                    <li>
                        New to Tiendita?
                    </li>
                    <li>
                        <Link to={'/register'} className="button secondary text-center" >Create your Tiendita account</Link>
                    </li>
                </ul>
            </form>
        </Div>
    
    );
}

export default Signin;