import React from 'react';

function ProductCard({product}) {
    return(
        <div className='product-card'>
            <img className='product-image' src={product.image}/>
            <div className='product-details'>
                <h2 className='product-card-title'>{product.title}</h2>
                <p className='product-card-description'>{product.description}</p>
                <p className='product-card-prices'>Price: ${product.price}</p>
                <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            </div>
            
        </div>
    )
}
export default ProductCard;