import React, { useEffect, useState } from "react"
import Product from "../components/Product"
import styles from "../styles/index.module.scss"
import MainContainer from "../components/MainContainer"
import { useGetProductsQuery } from "../store/products/products.api"
import { useActions } from "../hooks/actions"
import { useAppSelector } from "../hooks/redux"
import Advert from "../components/Advert"

const Index = () => {

    const {isLoading, isError, data:response} = useGetProductsQuery('')

    const {setAllProducts} = useActions()

    const {all} = useAppSelector(state => state.products)

    useEffect(() => {
        setAllProducts(response) 
    }, [response])

    return (
        <MainContainer title="Главная">
            {isLoading ? <h1>Загрузка...</h1> :
            isError ? <h1>Ошибка</h1> :            
            all ? 
            <div className={styles.container}>
                <Advert></Advert>
                {all.map(product => (
                    <Product 
                        id={product.id} 
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        category={product.category}
                        image={product.image}
                        rating={product.rating}
                        key={product.id}
                        count={0}
                        favourite={false}    
                    />
                ))}
            </div> : 
            <h1>Нет данных</h1>            
            }
        </MainContainer>
    )
}

export default Index

