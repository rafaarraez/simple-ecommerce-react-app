import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetails } from '../redux/actions/products.action';
import Button from '../components/button/button';

const Main = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
    display: flex;
}
.left-column {
    width: 100%;
    margin:0 auto;
    position: relative;
}   
.right-column {
    width: 100%;
    margin-top: 60px;
}
.left-column img {
    width: 100%;
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
@media(max-width: 700px ){
        display: block;
}
`;

const Product = (props) => {
    const productDetailsReducer = useSelector((state) => state.productDetailsReducer);
    const { product, loading, error, img } = productDetailsReducer;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductDetails(props.match.params.id));
    }, []);   

    return(
        <Main className="container">
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error} </div>
            ) : (
                <>
                    <div className="left-column">
                        <img src={img} alt="" />
                    </div>
                    <div className="right-column">
                        <div className="product-description">
                            <span><Link to="/">Back to result</Link></span>
                            <h1>{product.name}</h1>
                            <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
                        </div>
                        <Button className="button primary">Comporar</Button>
                    </div>
                </>
            )}
        </Main>
    );
}

export default Product;