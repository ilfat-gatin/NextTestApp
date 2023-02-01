import { useState } from "react"
import styles from "../../styles/button.module.scss"

interface IButton {
    count: number
    isInCart: boolean
    click(count: number): void
}

const Button:React.FC<IButton> = ({click, count: number, isInCart}) => {
    const [count, setCount] = useState(number)
    const [clicked, setClicked] = useState(isInCart)

    function increment() {
        setCount((prev) => prev + 1)
    }

    function decrement() {
        setCount((prev) => prev - 1)
    }

    function handleClick() {
        setClicked(true)
        click(count)
    }

    return (
        <div className={styles.btn_wrapper}>
            <button className={clicked ? styles.btngreen :styles.btn} onClick={handleClick}>{clicked ? "В корзине" : "В корзину"}</button>
            <div className={clicked ? styles.none : styles.counter}>
                <button className={styles.symbol} onClick={decrement}>—</button>
                <span>{count}</span>
                <button className={styles.symbol} onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Button