import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/actions/products.action";

const Div = styled.div`
    display: grid;
    grid-gap: 42px;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    margin: 0 auto;
    max-width: 1360px;
    padding: 3%;
  }
  .product-card {
    background: #eee;
    border-radius: 0.5rem;
    padding: 24px 42px 28px;
    position: relative;
    text-align: center;
  }
`;

const Products = ({ open }) => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productos);
	const { products, loading, error } = productList;

	useEffect(() => {
		dispatch(fetchProduct());
	}, []);
	console.log(products);
	
	return (
		<Div>
			{
				loading ? (
					<div>Loading...</div>
				) : error ? (
					<div>{error}</div>
				) : Object.keys(products).length === 0 ? ( 
					<p>NO HAY</p>
				) : (
					products.items.map((product) => (
						<div key={product.id} className="product-card">
							<Link to={"/product/" + product.id}>
								<img
									src={product.image.url}
									alt="Retro Pile Fleece Pullover"
								/>
							</Link>
							<Link to={"/product/" + product.id}>
								<h2>{product.name}</h2>
							</Link>
							<h3>Cobalt Blue</h3>
							<h4>$129.00</h4>
						</div>
					))
				)
			}

		</Div>
	);
	};

export default Products;
