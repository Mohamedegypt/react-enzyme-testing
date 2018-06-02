import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
	return(
          <ul>
          {props.products.map((product) => {
          	console.log(product)
          	  return(
          	  	<li key={product.id}>
          	      {product.name} {product.brand}
          	   </li>
          	   )
          })}
          </ul>
		)
}

Product.propTypes = {
	products: PropTypes.array.isRequired
}
export default Product;