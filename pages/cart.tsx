import CartitemCard from "../components/CartitemCard"
import MainContainer from "../components/MainContainer"
import { useActions } from "../hooks/actions"
import { useAppSelector } from "../hooks/redux"
import styles from "../styles/cart.module.scss"

export default function Cart() {   
    const {cart} = useAppSelector(state => state.products)

    const {removeFromCart} = useActions()

    function deleteFromCart(id: number) {      
        removeFromCart(id)      
    }

    return (
        <MainContainer title="Корзина">
            <h1 className={styles.title}>Корзина</h1>
            <div className={styles.wrapper}>
            {cart.map((el) => (
                <CartitemCard 
                    id={el.id}
                    key={el.id}
                    image={el.image}
                    count={el.count}
                    price={el.price}
                    total={el.total}
                    title={el.title}
                    click={deleteFromCart}
                />
            ))}
            </div>
            <p className={styles.total}><b>Итого: </b>{cart.reduce((sum, el) => { return sum + el.total}, 0)} ₽</p>
        </MainContainer>
    )
}