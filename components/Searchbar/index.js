import styles from './Search.module.scss'


export default function Searchbar ({ onChange }) {
    let typeTimeout = null // used to detect when a user is temporarily done typing

    let handleInput = (e) => {
        if(typeTimeout) clearTimeout(typeTimeout)
        
        typeTimeout = setTimeout(() => {
            if(onChange) onChange(e.target.value)
        }, 500)
    }

    return (
        <div className={styles.SearchBar}>
            <input type='text' placeholder='Search by name or username' onChange={handleInput} />
        </div>
    )
}