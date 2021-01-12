import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import * as R from 'ramda';
import ReactLoading from 'react-loading';

import { fetchProducts } from '../../actions/FetchProducts';
import { getProducts } from '../../selectors';

const Home = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllProducts();
    }, [])

    const fetchAllProducts = async () => {
        const { products } = props;
        setLoading(false);
        if (R.isEmpty(products)) {
            setLoading(true);
            await props.fetchProducts();
            setLoading(false);
        }
    }

    const { products } = props;

    const renderProducts = (product) => {
        return (
            <div className='product-container'>
                <ul>
                    <li>
                        <img src={product.img} alt={product.asin} className='product-image' />
                    </li>
                    <li>
                        <h5>
                            {product.name}
                        </h5>
                    </li>
                    <li>
                        <h6>
                            {product.asin}
                        </h6>
                    </li>
                    <li>
                        <h6>
                            {product.price}
                        </h6>
                    </li>
                    <li>
                        <h6>
                            {product.bsr_category}
                        </h6>
                    </li>
                    <li>
                        <h6>
                            {product.link}
                        </h6>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <div className='products-container'>
            {products.map((product) => renderProducts(product))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: getProducts(state)
});

const mapDispatchToProps = {
    fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);