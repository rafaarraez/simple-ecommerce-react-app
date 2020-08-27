import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { saveProduct } from '../redux/actions/products.action';
import FormContainer from '../components/form/form';
import Button from '../components/button/button';

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

const NewProduct = (props) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [uploading, setUploading] = useState(false);
    const dispatch = useDispatch();

    const productSave = useSelector((state) => state.productSave);
    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = productSave;

    const handlerOnChange = (target) => {
        const {name, value} = target;        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
          saveProduct({
            name
          })
        );
    };

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setUploading(true);
        Axios
            .post('/api/uploads', bodyFormData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            })
          .then((response) => {
                setImage(response.data);
                setUploading(false);
            })
            .catch((err) => {
                console.log(err);
                setUploading(false);
            });
    };

    return(
        <Div>
            <form onSubmit={submitHandler} >
                <FormContainer>
                    <li>
                        <h2>Create Product</h2>
                    </li>
                    <li>
                    {/* {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                    {errors && <p>Hay errores en los campos</p>} */}

                    </li>
                    <li>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" name="name" id="name" onChange={(e) => handlerOnChange(e.target)} />
                    </li>
                    <li>
                        <label htmlFor="img">Image</label>
                        <input type="file" accept="image/*"  id="img" name="img" onChange={uploadFileHandler} />
                        {uploading && <div>Uploading...</div>}
                    </li>
                    <li>
                        <Button type="submit" className="button primary">Create</Button>
                    </li>
                </FormContainer>
            </form>
        </Div>
    );
}

export default NewProduct;