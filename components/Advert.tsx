import styles from "../styles/advert.module.scss"
import Image from "next/image"
import img1 from './image1.png'
import img2 from './image2.jpg'
import Label from "./ui/Label"

export default function Advert() {
    return (
        <div className={styles.card}>
            <div className="top">
                <h1 className={styles.title}>Всё для комфортной работы</h1>
                <svg width="43" height="18" viewBox="0 0 43 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                    <path d="M33 1L41 9L33 17" stroke="#2E2E33" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M1 9H41" stroke="#2E2E33" strokeWidth="2" strokeLinecap="round"/>
                    </g>
                </svg>
            </div>
            <div className={styles.middle}>
                <div className={styles.img_wrapper1}>
                    <Image 
                    src={img1}
                    alt="Image 1"
                    layout="fill"
                    />       
                </div>                
                <div className={styles.text_block1}>              
                    <Label text={"-25%"} color={"black"} bgc={"#FFDC38"}></Label>
                    <p className={styles.text}>на товары для кабинета</p>
                    <button className={styles.btn}>
                        <span>Выбрать</span>
                        <div className={styles.circle}></div>
                    </button>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.text_block2}>
                    <div className={styles.label_wrapper2}>              
                        <Label text={"10%"} color={"black"} bgc={"#FFDC38"}></Label>
                    </div>  
                    <p>Скидка 10% на периферию для компьютера</p>
                    <button className={styles.btn}>
                        <span className={styles.span2}>Выбрать</span>
                        <div className={styles.circle}></div>
                    </button>
                </div>
                <div className={styles.img_wrapper2}>
                    <Image 
                    src={img2}
                    alt="Image 1"
                    layout="fill"
                    />       
                </div>
            </div>
        </div>
    )
} 