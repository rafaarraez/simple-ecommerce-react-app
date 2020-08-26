import React, { useState } from 'react';
import styled from 'styled-components';

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

const Register = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    // const userRegister = useSelector(state => state.userRegister);
    // const { loading, userInfo, error } = userRegister;
    // const dispatch = useDispatch();

    // const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    // useEffect(() => {
    //     if (userInfo) {
    //     props.history.push(redirect);
    //     }
    //     return () => {
    //     //
    //     };
    // }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(register(name, email, password));
    }
    return(
        <Div>
            <form onSubmit={submitHandler} >
                <ul className="form-container">
                    <li>
                        <h2>Create Account</h2>
                    </li>
                    <li>
                    {/* {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>} */}
                    </li>
                    <li>
                    <label htmlFor="name">
                        Name
                    </label>
                        <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
                        </input>
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
                        <label htmlFor="rePassword">Re-Enter Password</label>
                        <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Register</button>
                    </li>
                    <li>
                        Already have an account?
                        {/* <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button secondary text-center" >Create your amazona account</Link> */}
                    </li>

                </ul>
            </form>
        </Div>
    )
}

export default Register;