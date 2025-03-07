import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import ProductFormComponent from './ProductFormComponent';
import { insertProduct, updateProduct } from '../../features/products/productSlice';

const ManageProductComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.products.items);
    const [product, setProduct] = useState({ id: "", name: "", description: "", status: "" });
    const { id } = useParams();

    useEffect(() => {
        if (id && products.length > 0) {
            const productToEdit = products.find((product) => product.id === parseInt(id));
            setProduct(productToEdit || { id: "", name: "", description: "", status: "" });
        }
    }, [id, products]);

    const updateState = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const saveProduct = async (e) => {
        e.preventDefault();

        try {
            if(product.id){
                await dispatch(updateProduct(product)).unwrap();
            } else {
                await dispatch(insertProduct(product)).unwrap();
            }
            navigate('/products');
        } catch (error) {
            console.error('Failed to save product:', error);
        }
    }

    const pageText = product.id ? "Edit Product" : "Create Product";

    return (
        <div>
            <ProductFormComponent pageText={pageText} product={product} onChange={updateState} onSave={saveProduct} />
        </div>
    );
};

export default ManageProductComponent;