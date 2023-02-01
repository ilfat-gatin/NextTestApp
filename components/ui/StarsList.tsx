import Star from "./Star"
import { useState } from "react"
import styles from "../../styles/stars.module.scss"

interface IStarsList {
    count: number
}

export default function StarsList({count}:IStarsList) {
    const [rating, setRating] = useState(count)
    const [hover, setHover] = useState(null)
    
    return <div className={styles.container}>
        {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1 
            return (
            <label>
                <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue}  
                    onClick={() => setRating(ratingValue)}
                    className={styles.input}
                />
                <div 
                    onMouseEnter={() => setHover(ratingValue)} 
                    onMouseLeave={() => setHover(null)} 
                    className={styles.star
                }>
                <Star color={ratingValue <= (hover || rating) ? "#F26A61" : "#E9E9EB"}/>
                </div>
            </label>
            )
        })}
    </div>
}