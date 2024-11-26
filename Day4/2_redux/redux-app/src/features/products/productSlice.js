import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productAPIClient from '../../services/product-api-client';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {
        // Logic for synchronous actions
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Insert Product
            .addCase(insertProduct.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(insertProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(insertProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Update Product
            .addCase(updateProduct.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { id, ...updatedProduct } = action.payload;
                const existingProduct = state.items.find(product => product.id === id);
                if (existingProduct) {
                    Object.assign(existingProduct, updatedProduct);
                }
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Delete Product
            .addCase(deleteProduct.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { id } = action.payload;
                const existingProduct = state.items.find(product => product.id === id);
                if (existingProduct) {
                    state.items = state.items.filter(product => product.id !== id);
                }
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

// Async thunks for API calls
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const products = await productAPIClient.getAllProducts();
            return products;
        } catch (error) {
            // Handle any errors here
            return rejectWithValue(error.response?.data || 'An error occurred');
        }
    }
);

export const insertProduct = createAsyncThunk(
    'products/insertProduct',
    async (product, { rejectWithValue }) => {
        try {
            const response = await productAPIClient.insertProduct(product);
            return response; // Return the response on successful insertion
        } catch (error) {
            return rejectWithValue(error.message || 'Error inserting product');
        }
    }
);

export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async (product, { rejectWithValue }) => {
        try {
            const response = await productAPIClient.updateProduct(product);
            return response; // Return the response on successful update
        } catch (error) {
            return rejectWithValue(error.message || 'Error updating product');
        }
    }
);

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (productId, { rejectWithValue }) => {
        try {
            await productAPIClient.deleteProduct({ id: productId });
            return { id: productId }; // Return the deleted product's id on successful deletion
        } catch (error) {
            return rejectWithValue(error.message || 'Error deleting product');
        }
    }
);

export default productSlice.reducer;