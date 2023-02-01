import styles from "../styles/cart.module.scss"
import Image from "next/image"

interface Cartitem {
    id: number
    image: string
    title: string
    count: number
    price: number
    total: number
    click(id: number):void
}

const CartitemCard:React.FC<Cartitem> = ({id, image, title, count, price, total, click}) => {

    function handleClick() {
        click(id)
    }
    
    return (
        <div className={styles.cart_item}>
            <Image
                src={image}
                alt={title}
                width={100}
                height={100}
            ></Image>
            <h3>{title}</h3>
            <p>{count}</p>
            <p>{price} ₽</p>                    
            <p>{total} ₽</p>
            <button onClick={handleClick}>Удалить</button>
        </div>
    )
}

export default CartitemCard