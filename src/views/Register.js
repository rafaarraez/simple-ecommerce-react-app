import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../redux/actions/user.action';

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

const Register = (props) => {

    const [data, setData] = useState({error: {}});
    const { errors } = data;
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
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

    const validate = (v) => {        
        const errors = {};
        if(!v.email){
            errors.nombre = "El campo nombres es obligatorio";
        }
        if(!v.password){
            errors.password = "La clave es obligatoria";
        }
        if(!v.rePassword){
            errors.rePassword = "La clave es obligatoria";
        }
        if (v.password !== v.rePassword) {
            errors.password = "las contraseñas no son iguales :V";
        }
        return errors
    }

    const handlerOnChange = (target) => {
        const {name, value} = target;
        setData({ ...data, [name]: value });
        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const {errors, ...sinErrors} = data;
        const result = validate(sinErrors);
        setData({errors: result});
        if(!Object.keys(result).length){

            console.log("Form validado");
            e.target.reset();
            dispatch(register(data.email, data.password));
        } 
    
    }
    return(
        <Div>
            <form onSubmit={submitHandler} >
                <ul className="form-container">
                    <li>
                        <h2>Create Account</h2>
                    </li>
                    <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                    {errors && <p>Hay errores en los campos</p>}

                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={(e) => handlerOnChange(e.target)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={(e) => handlerOnChange(e.target)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="rePassword">Re-Enter Password</label>
                        <input type="password" id="rePassword" name="rePassword" onChange={(e) => handlerOnChange(e.target)}>
                        </input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Register</button>
                    </li>
                    <li>
                        Already have an account?
                        <Link to={'/signin'} className="button secondary text-center" >Login in Tiendita</Link>
                    </li>
                </ul>
            </form>
        </Div>
    )
}

export default Register;