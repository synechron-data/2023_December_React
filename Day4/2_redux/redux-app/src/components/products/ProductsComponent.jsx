import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../../features/products/productSlice';
import ProductListComponent from './ProductListComponent';
import AddProductButton from './AddProductButton';
import LoaderAnimation from '../common/LoaderAnimation';

const ProductsComponent = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    const handleRefresh = () => {
        dispatch(fetchProducts());
    }

    const handleDeleteProduct = (productId) => {
        dispatch(deleteProduct(productId));
    }

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                Error: {error}
            </div>
        );
    } else if (status === 'loading') {
        <LoaderAnimation />
    } else {
        return (
            <>
                <div className="mt-5 mb-3">
                    <AddProductButton />
                    <button className='btn btn-warning btn-lg mx-2' onClick={handleRefresh}>
                        <span className='bi bi-arrow-clockwise'></span>
                        &nbsp;Refresh Products
                    </button>
                </div>
                <ProductListComponent products={products} onDelete={handleDeleteProduct} />
            </>
        );
    }
};

export default ProductsComponent;