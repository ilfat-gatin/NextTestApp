import styles from '../../styles/label.module.scss'

interface ILabel {
    text: string
    color: string
    bgc: string
}
const Label:React.FC<ILabel> = ({text, color, bgc}) => {
    return <div className={styles.label} style={{color: color, backgroundColor: bgc}}><span className={styles.span}>{text}</span></div>
}

export default Label