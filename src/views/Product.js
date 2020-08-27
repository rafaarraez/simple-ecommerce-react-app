import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetails } from '../redux/actions/products.action';

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
    .left-column img {
        width: 100%;
    }
}
`;

const Product = (props) => {
    const productDetailsReducer = useSelector((state) => state.productDetailsReducer);
    const { product, loading, error } = productDetailsReducer;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductDetails(props.match.params.id));
    }, []);
    console.log(productDetailsReducer);
    
    return(
        <Main className="container">
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error} </div>
            ) : (
                <>
                    <div className="left-column">
                        <img data-image="red" src={product.avatar} alt="" />
                    </div>
                    <div className="right-column">
                        <div className="product-description">
                            <span><Link to="/">Back to result</Link></span>
                            <h1>{product.name}</h1>
                            <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
                        </div>
                        <button className="button primary">Comporar</button>
                    </div>
                </>
            )}
        </Main>
    );
}

export default Product;