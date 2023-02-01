import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct } from "../../models/models"

export const productsApi = createApi({
    reducerPath: 'products/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: build => ({
        getProducts: build.query<IProduct[], string>({
            query: () => ({
                url: '/products',
            })
        })
    })
})

export const {useGetProductsQuery} = productsApi
