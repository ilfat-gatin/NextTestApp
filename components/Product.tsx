import React, { useState } from "react"
import styles from "../styles/product.module.scss"
import Image from "next/image";
import Button from "./ui/Button";
import StarsList from "./ui/StarsList";
import Label from "./ui/Label";
import FavButton from "./ui/FavButton";
import { useActions } from "../hooks/actions";
import { IProduct } from "../models/models";
import { useAppSelector } from "../hooks/redux";
import { CartItem } from "../store/products/products.slice";


const Product:React.FC<IProduct> = (props) => {

    const {addFavourite, removeFavourite, addToCart} = useActions()    

    const {favourites, cart} = useAppSelector(state => state.products)
    
    const [isFav, setIsFav] = useState(!!favourites.find(el => el.id == props.id))

    const [isInCart, setIsInCart] = useState(!!cart.find(el => el.id == props.id))

    const [count, setCount] = useState(0)

    function handleCart(value:number) {
        setCount(value)
        const item: CartItem = {
            id: props.id,
            title: props.title,
            count: value,
            image: props.image,
            price: props.price * 70,
            total: value * props.price * 70
        }
        addToCart(item)      
    }
    
    function handleFavourite() {
        if (isFav) {
            removeFavourite(props.id)
        } else {
            addFavourite(props)
        }        
        setIsFav(prev => !prev)        
    }

    return (
        <div className={styles.card}>
            {props.rating.count > 300 && <div className={styles.label_wrapper}>
                <Label text="Хит" color={"white"} bgc={"red"}/>
            </div>}                        
            <Image
                className={styles.img}
                src={props.image}
                alt={props.title}
                width={220}
                height={220}
            ></Image>
            <div className={styles.text_wrapper}>
                <p className={styles.category}>{props.category}</p>
                <div className={styles.text_wrapper}>
                    <StarsList count={Math.round(props.rating.rate)}/>
                    <p className={styles.rating_text}>{props.rating.count} отзывов</p>
                </div>
            </div>            
            <p className={styles.title}>{props.title}</p>
            <p className={styles.price_wrapper}><span className={styles.price}>{(props.price * 70).toFixed(2)} ₽</span>/шт</p>           
            <div className={styles.btns_wrapper}>
                <Button click={handleCart} count={count} isInCart={isInCart}/>
                <FavButton click={handleFavourite} favourite={isFav}/>
            </div>            
        </div>
    )
}

export default Product