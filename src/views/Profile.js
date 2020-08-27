import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Main = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
    display: flex;
}
.left-column {
    width: 65%;
    position: relative;
}   
.right-column {
    width: 35%;
    margin-top: 60px;
}
.left-column img {
    width: 80%;
    left: 0;
    top: 0;
    transition: all 0.3s ease;
}
 
.product-description {
    border-bottom: 1px solid #E1E8EE;
    margin-bottom: 20px;
}
.product-description span {
    font-size: 12px;
    color: #358ED7;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
}
.product-description h1 {
    font-weight: 300;
    font-size: 52px;
    color: #43484D;
    letter-spacing: -2px;
    margin: 1rem 0;
}
.product-description p {
    font-size: 16px;
    font-weight: 300;
    color: #86939E;
    line-height: 24px;
}
.button {
    padding: 1rem;
    border: 0.1rem #808080 solid;
    border-radius: 0.5rem;
    cursor: pointer;
    width: 100%;
  }
.button:hover {
    border: 0.1rem #404040 solid;
}
.button.primary {
    background-color: #f0c040;
}
@media(max-width: 700px ){
        display: block;
    }
    .left-column {
        width: 100%;
        margin:auto;
    }   
    .right-column {
        width: 100%;
    }
}
`;

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

const Profile = (props) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    useEffect(() => {
        if (userInfo) {
            console.log();
            setEmail(userInfo.user.email);
            setPassword(userInfo.user.password);
        }
        return () => {
    
        };
      }, [userInfo])
    return(
        <Main className="container">
            <div className="left-column">
                <Div className="form">
                    <form >
                        <ul className="form-container">
                            <li>
                            <h2>Update Profile</h2>
                            </li>
                            <li>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="email" value={email} name="email" id="email">
                                </input>
                            </li>
                            <li>
                                <label htmlFor="password">Password</label>
                                <input type="password" value={password} id="password" name="password">
                                </input>
                            </li>
                            <li>
                                <button type="submit" className="button primary">Update Profile</button>
                            </li>
                            <li>
                                <button type="submit" className="button secundary">Logout</button>
                            </li>
                        </ul>
                    </form>
                </Div>
            </div>
            <div className="right-column">
                <div className="product-description">
                    <span><Link to="/">Back to result</Link></span>
                    <h1>{email}</h1>
                    <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
                </div>
                <button className="button primary">Comporar</button>
            </div>
        </Main>
    )
}

export default Profile;