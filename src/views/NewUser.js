import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { saveProduct } from '../redux/actions/products.action';
import FormContainer from '../components/form/form';
import Button from '../components/button/button';
import { Link } from 'react-router-dom';
import { registerByAdmin } from '../redux/actions/user.action';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10rem;
}
li {
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

@media(max-width: 375px ){
  .form-container {
      width: 15rem;

    }
}
`;

const NewUser = (props) => {
    const [data, setData] = useState({error: {}});
    const { errors } = data;
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, success, error } = userRegister;
    const dispatch = useDispatch();

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
            dispatch(registerByAdmin(data.email, data.password));
        } 
    
    }

    return(
        <Div>
            <form onSubmit={submitHandler} >
                <FormContainer>
                    <li>
                        <h2>Create New User By Admin</h2>
                    </li>
                    <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                    {errors && <p>Hay errores en los campos</p>}
                    {success && <p>Se creo el usuario satisfactoriamente</p>}
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
                        <Button type="submit">Register</Button>
                    </li>
                </FormContainer>
            </form>
        </Div>
    );
}

export default NewUser;