import Head from "next/head"
import Link from "next/link"
import styles from "../styles/navbar.module.scss"

const MainContainer = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={styles.navbar}>
                <Link href="/">Главная</Link>
                <div>
                    <Link href="/cart">Корзина</Link>
                    <Link href="/favourites">Избранное</Link>
                </div>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainContainer