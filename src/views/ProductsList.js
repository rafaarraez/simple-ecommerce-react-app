import React, { useEffect  } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, deleteProdcut } from '../redux/actions/products.action';
import { Link } from 'react-router-dom';

const Div = styled.div`
margin: 1rem;
}
.product-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .table {
    width: 100%;
  }
  th {
    text-align: left;
  }
  tbody > tr:nth-child(odd) {
    background-color: #f0f0f0;
  }
`;


const ProductsList = () => {

   
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productos);
    const { products, loading, error } = productList;

    useEffect(() => {
        dispatch(fetchProduct());
    }, []);

    const deleteProduct = (id) => {
        dispatch(deleteProdcut(id))  
    }

    return(
        <Div className="content content-margined">
		{
		loading ? (
			<div>Loading...</div>
		) : error ? (
			<div>{error}</div>
		) : Object.keys(products).length === 0 ? ( 
			<p>NO HAY</p>
		) : (
            <>
                <div className="product-header">
                    <h3>Products</h3>
                    <Link to="/new-product" className="button primary">
                        Create Product
                    </Link>
                </div>
                <div className="product-list">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.items.map((product) => (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>

                                    <td>
                                    <button className="button">
                                        Edit
                                    </button>{' '}
                                    <button
                                        className="button"
                                        onClick={() => deleteProduct(product.id)}
                                    >
                                        Delete
                                    </button>
                                    </td>
                                </tr>
                        
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
		)}
    </Div>
        
    );
}

export default ProductsList;