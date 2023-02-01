import MainContainer from "../components/MainContainer"
import { useAppSelector } from "../hooks/redux"
import Product from "../components/Product"
import styles from "../styles/index.module.scss"

export default function Favourites() {
    const {favourites} = useAppSelector(state => state.products)    

    return (
        <MainContainer title="Избранное">
            <h1 style={{textAlign:'center'}}>Избранное</h1>
            {favourites.length ? 
                <div className={styles.container}>
                {favourites.map(product => (
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
                </div> : <h2 style={{textAlign:'center'}}>Пусто</h2>
            }
            
        </MainContainer>
    )
}