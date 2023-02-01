import { IProduct } from "../../models/models";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
    id: number
    title: string
    count: number
    total: number
    price: number
    image: string
}

interface ProductsState {
    cart: CartItem[];
    favourites: IProduct[];
    all: IProduct[];
}

const initialState: ProductsState = {
    favourites: [],
    cart: [],
    all: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setAllProducts(state, action: PayloadAction<IProduct[]>) {
            if (action.payload?.length) {
                state.all = action.payload
            }
        },
        addFavourite(state, action: PayloadAction<IProduct>) {          
            state.favourites.push(action.payload)
        },
        removeFavourite(state, action: PayloadAction<number>) {
            state.favourites = state.favourites.filter(el => el.id !== action.payload)
        },
        addToCart(state, action:PayloadAction<CartItem>) {
            state.cart.push(action.payload)
        },
        removeFromCart(state, action:PayloadAction<number>) {
            state.cart = state.cart.filter(el => el.id !== action.payload)
        }
    }
})

export const productsActions = productsSlice.actions
export const productsReducer = productsSlice.reducer