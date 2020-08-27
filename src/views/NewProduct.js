import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { saveProduct } from '../redux/actions/products.action';

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
                <ul className="form-container">
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
                        <button type="submit" className="button primary">Create</button>
                    </li>
                </ul>
            </form>
        </Div>
    );
}

export default NewProduct;