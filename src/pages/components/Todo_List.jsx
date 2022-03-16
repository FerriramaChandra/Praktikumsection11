import styles from "./Todo.module.css"

export default function Todo_List ({Item}) {
    return(
        <div className={styles.Penampung}>
            <div>
                <p style={{textDecoration: Item.completed ? 'line-through' : 'none'}}className={styles.border}>{Item.title}</p>
            </div>
        </div>
    )
}